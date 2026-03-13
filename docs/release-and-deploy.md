# Release & Deploy Guide

Practical, day‑to‑day checklist for releasing and deploying the design system.

---

## 1. Versioning Model

The design system uses **Semantic Versioning (SemVer)**:

- **PATCH**: `1.0.0 → 1.0.1` – Bug fixes, internal refactors, docs tweaks.
- **MINOR**: `1.0.0 → 1.1.0` – New components / features, backward‑compatible.
- **MAJOR**: `1.0.0 → 2.0.0` – Breaking changes for consuming projects.

Always choose the lowest version bump that accurately reflects the impact.

---

## 2. Everyday Release Workflow

Use this flow whenever you want to ship changes.

### Step 1 – While you work

1. **Document changes in `CHANGELOG.md`** under `## [Unreleased]`:
   - Group by sections: `Added`, `Changed`, `Fixed`, `Deprecated`, `Removed`, `Security`.
2. **Keep components documented**:
   - Update `COMPONENTS.md` and preview examples when you add/modify components.

### Step 2 – Pre‑release checks

Before running a release script:

1. **Run tests / linting (if configured)**:
   ```bash
   npm test         # or: npm run lint
   ```
2. **Check the preview app**:
   ```bash
   npm run dev
   # Open preview-vue.html and quickly inspect new/changed components
   ```
3. **Verify docs**:
   - `COMPONENTS.md` describes new props / states.
   - `docs/*` updated if you introduced new patterns or workflows.

### Step 3 – Choose the release type

Pick the script that matches your change impact:

```bash
npm run release:patch   # Bug fixes, docs-only, internal refactors
npm run release:minor   # New components / variants / features
npm run release:major   # Breaking changes for consumers
```

These scripts (as configured in `package.json`) will:

- Update `package.json` version.
- Move `[Unreleased]` entries in `CHANGELOG.md` into a new version section.
- Create a git commit and tag.
- Push changes and tags to GitHub.

After this step, `main` (or the default branch) represents the released version.

---

## 3. Deploying to Consumers (Everyday Use)

How downstream projects pick up a new release.

### If installed directly from GitHub

**Initial install:**

```bash
npm install git+https://github.com/Hipstacowboys/design-system.git
```

**Update to latest released version:**

```bash
npm update @hipstacowboys/design-system
```

**Install a specific tag (e.g. `v1.2.0`):**

```bash
npm install git+https://github.com/Hipstacowboys/design-system.git#v1.2.0
```

### Consumption pattern in apps

Typical usage in a consuming project:

```javascript
import {
  ButtonPrimary,
  Input,
  CalendarDatepicker,
  TimeSlot,
  TimeSlotBig,
} from '@hipstacowboys/design-system';
```

SCSS tokens:

```scss
@import '@hipstacowboys/design-system/tokens/_variables';
```

---

## 4. Quick Release Checklist (TL;DR)

1. **Code & Preview**
   - Components updated and added to `components/` and `PreviewApp.vue`.
   - Visuals verified in `npm run dev` preview.
2. **Docs**
   - `CHANGELOG.md` updated under `[Unreleased]`.
   - `COMPONENTS.md` and relevant `docs/*.md` reflect new/changed components.
3. **Release**
   - Run `npm run release:patch|minor|major` (choose appropriate level).
4. **Deploy / Consume**
   - Downstream projects run `npm update @hipstacowboys/design-system`
     or install the specific tagged version.

Keep this file as the single place to onboard teammates to the release & deploy workflow.

