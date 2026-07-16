# Model Editor Case Study Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the homepage `Model Editor` card open a new case study page at `/[locale]/projects/model-editor/`, using the same layout rhythm as Selfly and content from the reference page.

**Architecture:** Add internal routing from homepage tool cards, then build a dedicated `model-editor` route that reuses Selfly's case-study layout primitives (`featuredHero`, `caseSection`, positioning grid, evidence blocks, closing contact). Migrate copy and media from the old `jaemin-portfolio` Model Editor page instead of inventing new content. Keep Model Editor-specific visuals in local components/CSS, but mirror Selfly spacing and typography.

**Tech Stack:** Next.js App Router, React 19, CSS Modules, existing i18n helpers (`localePath`, `isLocale`), `next/image`, existing `LazyVideo`.

**Reference:** https://jaemin17.github.io/jaemin-portfolio/zh/projects/model-editor/

---

## Current State

| Area | Status |
|------|--------|
| Homepage `Model Editor` card | Shows media + title, but **not clickable** (`ToolProjectCard` has no `href`) |
| Route `/projects/model-editor` | **Does not exist** in `portfolio-pro` |
| Selfly case study | Exists at `src/app/[locale]/projects/selfly/` with full layout system |
| Old portfolio case study | Exists at `jaemin-portfolio/src/app/[locale]/projects/model-editor/page.tsx` with complete content + assets |
| Existing media in repo | `public/videos/tools/model.mp4`, `public/images/posters/tools/model.webp` only |

---

## Recommended Approach

### Option A — Recommended
Build a new `model-editor` page in `portfolio-pro` using **Selfly layout shell** + **old portfolio content/components**.

Pros:
- Matches your request for Selfly-consistent layout
- Reuses already-proven copy and media mapping from old site
- Smallest content risk

Cons:
- Need to port a few old components (`FinalLayoutCarousel`, demo blocks)

### Option B — Direct port of old `project-detail.module.css`
Copy old page and styles almost verbatim.

Pros:
- Fastest initial render

Cons:
- Layout will **not** match Selfly
- Creates a second case-study design system

### Option C — Extract shared case-study design system first
Refactor Selfly styles into shared `caseStudy.module.css`, then build Model Editor on top.

Pros:
- Best long-term maintainability

Cons:
- Too much scope before first page ships

**Decision:** Use **Option A**.

---

## Page Information Architecture

Mirror Selfly's vertical rhythm:

1. **Hero**
   - Title: `Model Editor：面向教学的 3D 模型编辑器`
   - Subtitle: `帮助非专业用户完成材质、结构、动画与标注预处理。`
   - Hero visual: reuse homepage model video/poster or dedicated hero screenshot
   - Meta: `2023–2024 · Interaction & Visual Design`

2. **项目背景 / Project Background**
   - Selfly-style positioning section
   - Heading: `从原始 3D 模型，到课堂可用的教学素材`
   - Body copy + `我的角色`

3. **设计目标 / Design Goals**
   - Section label + headline
   - 3 goal cards:
     - 更容易理解
     - 更容易操作
     - 更快完成编辑任务

4. **当前状态 / Current State**
   - Problem framing copy
   - Bullets:
     - 为模型预览释放更多空间
     - 不同操作更易识别
     - 工具调整更轻量可控
   - Evidence image: early prototype layout diagram

5. **模型预览最大化 / Preview Maximization**
   - Text section + design decisions list
   - Carousel: `空间对比` / `最大化预览` / `参数浮层`

6. **操作归属 / Operation Attribution**
   - Text section + design decisions list
   - Before/after or comparison carousel

7. **工具操作轻量化 / Tool Simplification**
   - Text section + design decisions list
   - Tabbed carousel: `放大点击目标` / `对比深色模式` / `文字提示`

8. **功能演示 / Feature Demos** (5 blocks)
   - 预设材质
   - 爆炸设置
   - 透视与显隐
   - 动画时间轴
   - 部件标注

9. **Closing**
   - `想了解更多细节？`
   - Email CTA
   - `← 返回首页`

---

## File Map

| File | Responsibility |
|------|----------------|
| `src/i18n/copy.ts` | Add `href` to `ToolProjectItem`; set Model Editor link |
| `src/app/[locale]/page.tsx` | Make `ToolProjectCard` navigate when `href` exists |
| `src/app/[locale]/projects/model-editor/page.tsx` | Main case study page |
| `src/app/[locale]/projects/model-editor/modelEditor.module.css` | Page-specific styles; reuse Selfly class patterns where needed |
| `src/app/[locale]/projects/model-editor/modelEditorCopy.ts` | zh/en structured copy for all sections |
| `src/app/[locale]/projects/model-editor/ModelEditorCarousel.tsx` | Ported carousel for comparison slides |
| `src/app/[locale]/projects/model-editor/FeatureDemoBlock.tsx` | Reusable demo section (label + media + caption) |
| `public/images/model-editor/**` | Case study screenshots from old portfolio |
| `public/videos/model-editor/**` | Feature demo videos from old portfolio (if available) |

---

## Task 1: Enable homepage navigation

**Files:**
- Modify: `src/i18n/copy.ts`
- Modify: `src/app/[locale]/page.tsx`

- [ ] **Step 1: Extend `ToolProjectItem` with optional `href`**

```ts
export type ToolProjectItem = {
  title: string;
  description: string;
  href?: string;
  // ...
};
```

- [ ] **Step 2: Add Model Editor href in both locales**

```ts
href: "/projects/model-editor",
```

- [ ] **Step 3: Wrap `ToolProjectCard` media area in `Link` when `href` is present**

Pattern to follow: `BuildingItem` in `page.tsx` already links internal routes via `localePath(locale, item.href)`.

- [ ] **Step 4: Keep `CursorLabel` + `data-hide-cursor-dot` behavior inside the link**

- [ ] **Step 5: Manual test**

1. Open `/zh/`
2. Hover `Model Editor` card → `VIEW` label still works
3. Click card → navigates to `/zh/projects/model-editor/` (will 404 until Task 2)

---

## Task 2: Scaffold the route and Selfly-style shell

**Files:**
- Create: `src/app/[locale]/projects/model-editor/page.tsx`
- Create: `src/app/[locale]/projects/model-editor/modelEditor.module.css`

- [ ] **Step 1: Create page with locale guard**

Use the same pattern as `selfly/page.tsx`:
- `params: Promise<{ locale: string }>`
- `isLocale` + `notFound()`
- local `t()` / `tStr()` helpers

- [ ] **Step 2: Reuse Selfly layout structure**

Start with these blocks only:
- `featuredHero` / `projectOneHero`
- repeated `caseSection`
- `selfly0ContactSection` closing

For CSS, either:
- import and compose classes from `../selfly/selfly0.module.css`, or
- copy the minimum needed selectors into `modelEditor.module.css`

Recommendation: **import Selfly CSS for shared layout primitives** in v1 to avoid drift.

- [ ] **Step 3: Add hero content from reference page**

- [ ] **Step 4: Add closing contact block**

- [ ] **Step 5: Verify route renders**

`npm run dev` → `/zh/projects/model-editor/`

---

## Task 3: Migrate structured copy

**Files:**
- Create: `src/app/[locale]/projects/model-editor/modelEditorCopy.ts`

- [ ] **Step 1: Extract all zh copy from reference page into typed objects**

Suggested shape:

```ts
type ModelEditorCopy = {
  hero: { title: string; subtitle: string; meta: string };
  background: { label: string; heading: string; paragraphs: string[]; role: string };
  goals: { label: string; heading: string; intro: string; items: { title: string; body: string }[] };
  // ...
};
```

- [ ] **Step 2: Add English translations**

Do not ship zh-only English route. Translate section labels and body copy cleanly.

- [ ] **Step 3: Wire copy into `page.tsx`**

Keep JSX readable; avoid giant inline strings.

---

## Task 4: Port media assets

**Files:**
- Create: `public/images/model-editor/**`
- Create: `public/videos/model-editor/**` (if needed)

- [ ] **Step 1: Copy assets from old repo**

Source repo: `jaemin-portfolio/public/images/model-editor/`

Expected groups:
- early prototype diagram
- layout comparison screenshots
- operation attribution comparison
- tool simplification screenshots
- 5 feature demo stills/videos

- [ ] **Step 2: Normalize filenames**

Prefer ASCII-safe names for maintainability, e.g.:
- `hero.webp`
- `prototype-early.webp`
- `layout-space-compare.webp`
- `demo-material.webp`

- [ ] **Step 3: Create `modelEditorAssets.ts` path map**

Use `assetPath()` like Selfly does.

- [ ] **Step 4: Optimize large images if needed**

Convert heavy PNGs to `.webp` where appropriate.

---

## Task 5: Build evidence components

**Files:**
- Create: `src/app/[locale]/projects/model-editor/ModelEditorCarousel.tsx`
- Create: `src/app/[locale]/projects/model-editor/FeatureDemoBlock.tsx`
- Modify: `src/app/[locale]/projects/model-editor/page.tsx`

- [ ] **Step 1: Port `FinalLayoutCarousel` from old portfolio**

Old source:
- `jaemin-portfolio/src/components/FinalLayoutCarousel.tsx`
- `FinalLayoutCarousel.module.css`

Support:
- image slides
- optional custom `content` slides

- [ ] **Step 2: Implement `FeatureDemoBlock`**

Props:
- `label`
- `title`
- `description`
- `media` (`image` or `video`)

- [ ] **Step 3: Add section 4 evidence image (early prototype)**

- [ ] **Step 4: Add section 5 carousel (preview maximization)**

Slides:
- 空间对比
- 最大化预览
- 参数浮层

- [ ] **Step 5: Add section 6 carousel (operation attribution)**

- [ ] **Step 6: Add section 7 tabbed carousel (tool simplification)**

- [ ] **Step 7: Add 5 feature demo blocks**

---

## Task 6: Responsive + polish

**Files:**
- Modify: `src/app/[locale]/projects/model-editor/modelEditor.module.css`
- Modify: carousel/demo component CSS

- [ ] **Step 1: Match Selfly mobile spacing**

Target breakpoints already used in `selfly0.module.css` (~760px).

- [ ] **Step 2: Ensure carousels work on touch**

Large tap targets for slide labels.

- [ ] **Step 3: Check long English headings for wrap/overflow**

Especially:
- `Imagination & visual expression`-style long phrases
- design decision bullets

- [ ] **Step 4: Verify images have meaningful `alt` text**

---

## Task 7: Verification

- [ ] **Step 1: Run lint**

```bash
npm run lint
```

- [ ] **Step 2: Run production build**

```bash
npm run build
```

- [ ] **Step 3: Manual QA checklist**

- [ ] Homepage `Model Editor` card links correctly in `zh` and `en`
- [ ] Page layout visually matches Selfly rhythm (hero → sections → closing)
- [ ] All 9 content sections present
- [ ] Carousels switch correctly
- [ ] Demo media loads on GitHub Pages base path
- [ ] `← 返回首页` works
- [ ] Locale switch preserves `/projects/model-editor/`

---

## Suggested Delivery Phases

### Phase 1 — Clickable + skeleton (small PR)
- Task 1
- Task 2 (hero + closing only)

### Phase 2 — Content + assets (main PR)
- Task 3
- Task 4
- Background + goals + current state sections

### Phase 3 — Interactive evidence (main PR continued)
- Task 5
- Task 6
- Task 7

This keeps the homepage link working early, while the full case study lands in one cohesive follow-up.

---

## Risks / Notes

1. **Asset availability:** old portfolio image filenames include Chinese characters; normalize during import.
2. **Style coupling:** importing `selfly0.module.css` is fastest, but naming is Selfly-specific. Acceptable for v1; extract shared styles only if more case studies are coming.
3. **English copy:** reference EN URL currently appears zh-heavy; write proper EN translations during implementation.
4. **Scope control:** do not port unrelated old portfolio components (`SiteHeader` inside page, cursor effects, etc.). Global header already exists in `portfolio-pro`.

---

## Done Criteria

- Clicking `Model Editor` on homepage opens a dedicated case study page
- Page follows Selfly layout rhythm
- Content matches the reference page structure and messaging
- zh/en both supported
- Build and lint pass
