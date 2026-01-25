#!/usr/bin/env node

/**
 * Release script - Automates version bumping and changelog updates
 * Usage: node scripts/release.js patch|minor|major
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const RELEASE_TYPE = process.argv[2];

if (!['patch', 'minor', 'major'].includes(RELEASE_TYPE)) {
  console.error('Usage: node scripts/release.js patch|minor|major');
  process.exit(1);
}

const CHANGELOG_PATH = path.join(__dirname, '..', 'CHANGELOG.md');
const PACKAGE_JSON_PATH = path.join(__dirname, '..', 'package.json');

// Read current files
const changelog = fs.readFileSync(CHANGELOG_PATH, 'utf8');
const packageJson = JSON.parse(fs.readFileSync(PACKAGE_JSON_PATH, 'utf8'));

// Get current version
const currentVersion = packageJson.version;
const [major, minor, patch] = currentVersion.split('.').map(Number);

// Calculate new version
let newVersion;
if (RELEASE_TYPE === 'major') {
  newVersion = `${major + 1}.0.0`;
} else if (RELEASE_TYPE === 'minor') {
  newVersion = `${major}.${minor + 1}.0`;
} else {
  newVersion = `${major}.${minor}.${patch + 1}`;
}

// Get today's date
const today = new Date().toISOString().split('T')[0];

// Extract unreleased content
const unreleasedMatch = changelog.match(/## \[Unreleased\]([\s\S]*?)(?=## \[|\n## \[|$)/);
if (!unreleasedMatch || !unreleasedMatch[1].trim()) {
  console.error('No unreleased changes found in CHANGELOG.md. Please add changes to [Unreleased] section first.');
  process.exit(1);
}

const unreleasedContent = unreleasedMatch[1].trim();

// Create new version section
const newVersionSection = `## [${newVersion}] - ${today}${unreleasedContent ? '\n\n' + unreleasedContent : '\n\n### Changed\n- Version bump\n'}`;

// Update changelog
const updatedChangelog = changelog.replace(
  /## \[Unreleased\]([\s\S]*?)(?=## \[|\n## \[|$)/,
  `## [Unreleased]\n\n### Added\n- \n\n### Changed\n- \n\n### Fixed\n- \n\n${newVersionSection}\n\n`
);

// Update links at bottom
const linksMatch = changelog.match(/\[Unreleased\]: (.*?)\n\[(.*?)\]: (.*?)$/s);
if (linksMatch) {
  const oldVersion = linksMatch[2];
  const oldLink = linksMatch[3];
  const newLinks = `[Unreleased]: https://github.com/Hipstacowboys/design-system/compare/v${newVersion}...HEAD\n[${newVersion}]: https://github.com/Hipstacowboys/design-system/releases/tag/v${newVersion}\n[${oldVersion}]: ${oldLink}`;
  
  const finalChangelog = updatedChangelog.replace(
    /\[Unreleased\]: .*?\n\[.*?\]: .*?$/s,
    newLinks
  );
  
  fs.writeFileSync(CHANGELOG_PATH, finalChangelog, 'utf8');
} else {
  // First release - add links
  const finalChangelog = updatedChangelog + `\n\n[Unreleased]: https://github.com/Hipstacowboys/design-system/compare/v${newVersion}...HEAD\n[${newVersion}]: https://github.com/Hipstacowboys/design-system/releases/tag/v${newVersion}`;
  fs.writeFileSync(CHANGELOG_PATH, finalChangelog, 'utf8');
}

// Update package.json
packageJson.version = newVersion;
fs.writeFileSync(PACKAGE_JSON_PATH, JSON.stringify(packageJson, null, 2) + '\n', 'utf8');

console.log(`\n✅ Updated version: ${currentVersion} → ${newVersion}`);
console.log(`✅ Updated CHANGELOG.md with new version section`);
console.log(`✅ Updated package.json\n`);

// Stage all changes (including CHANGELOG.md and package.json)
execSync('git add -A', { stdio: 'inherit' });

// Create commit and tag
const commitMessage = `chore: release v${newVersion}`;
execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
execSync(`git tag -a v${newVersion} -m "Release v${newVersion}"`, { stdio: 'inherit' });

console.log(`\n✅ Created commit and tag v${newVersion}`);
console.log(`\n📦 Ready to push! Run: git push --follow-tags\n`);
