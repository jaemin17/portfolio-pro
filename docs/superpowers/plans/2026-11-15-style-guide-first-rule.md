# Visual guideline page — first rule

**Goal:** 建立只收录正式规则的规范页，首项为用户确认的常规正文 400 字重。

**Architecture:** 使用现有 locale 路由、全局字体与 CSS Modules。正式文档只保留正式规则，候选讨论单独归档。页面不加入导航；其余样式参数用于展示，不宣称为规范。

用户已同意页面形式，并于 2026-11-15 确定正文 400。继续逐项确认后续属性，不把字号、字体、颜色一并视为批准。不提交或推送。

- [x] 将候选版移到 `docs/visual-guidelines-candidates.md`；`docs/visual-guidelines.md` 仅保留正式正文规则及规范页入口。
- [x] `globals.css` 新增 `--fw-body: 400` 并用于 body，显式记录当前默认字重；不改变其他值。
- [x] 创建 `[locale]/style-guide/page.tsx` 和 `styleGuide.module.css`，包含正文示例、400 数值、用途、Selfly 来源链接；中英文分别显示，metadata noindex；不加入导航。
- [x] 运行针对性 ESLint、`git diff --check` 和 `pnpm build`；在复用预览中检查桌面与窄屏，无横向溢出、示例计算字重为 400；保存截图并清除视口覆盖。

后续每次确认一项，同步正式文档和展示页。待讨论项仅进入候选文档。

## 验证记录

- 针对新增 page.tsx 的 ESLint 与 git diff --check 通过。
- pnpm build 成功，生成 /zh/style-guide/ 与 /en/style-guide/。
- 应用内预览核对 1280px 与 390px：示例计算字重 400，文档宽度等于视口宽度；英文入口与中文返回正常。
- 截图：docs/visual-audit/2026-11-15/style-guide-1280.jpg、style-guide-390.jpg。
- 清除临时视口覆盖；停留在中文规范页。未修改公开导航，未提交或推送。
