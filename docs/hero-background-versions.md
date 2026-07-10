# Hero 背景版本存档

当前 **main 默认使用 V1**。V2 / V3 / V4 通过 git tag 保留，可随时切换预览或开发。

> 本文档与 tag 保留至你明确说「删掉」为止。

## 版本一览

| 版本 | Tag | Commit | 方案 | 一句话描述 |
|------|-----|--------|------|------------|
| **V1（当前）** | `hero-v1-warp-white-haze` | `776f6aa` | Warp | 饱和蓝天 + 透明→白 Warp 流动 |
| **V2** | `hero-v2-smokering-radial` | `9743ab5` | SmokeRing | 单层 cloud preset，向四周散开的云 |
| **V3** | `hero-v3-css-sky-puffs` | `f8aefe4` | CSS | 第一版蓝天渐变 + CSS puff 云向右飘 |
| **V4** | `hero-v4-warp-ribbon-left-white` | `b32f7e2` | Warp | 白底蓝带流动 + 左上渐白 + bottomFade 压带 |

### 相关文件

- `src/components/HeroShaderBackground.tsx`
- `src/components/HeroShaderBackground.module.css`

---

## 切换到某个版本（仅改背景组件）

```bash
cd /Users/jaemin/Documents/portfolio-pro

# 把 <tag> 换成上表中的 tag 名
git checkout <tag> -- \
  src/components/HeroShaderBackground.tsx \
  src/components/HeroShaderBackground.module.css
```

示例：

```bash
# 切到 V2
git checkout hero-v2-smokering-radial -- \
  src/components/HeroShaderBackground.tsx \
  src/components/HeroShaderBackground.module.css

# 切到 V3
git checkout hero-v3-css-sky-puffs -- \
  src/components/HeroShaderBackground.tsx \
  src/components/HeroShaderBackground.module.css

# 切到 V4
git checkout hero-v4-warp-ribbon-left-white -- \
  src/components/HeroShaderBackground.tsx \
  src/components/HeroShaderBackground.module.css

# 切回 V1
git checkout hero-v1-warp-white-haze -- \
  src/components/HeroShaderBackground.tsx \
  src/components/HeroShaderBackground.module.css
```

本地预览：`pnpm dev -p 3002`，打开 http://localhost:3002/zh/

---

## 把某个版本设为 main 当前版本（需 commit）

切换文件后若确认要保留：

```bash
git add src/components/HeroShaderBackground.tsx src/components/HeroShaderBackground.module.css
git commit -m "Set hero background to V<n>."
```

---

## 查看所有 hero tag

```bash
git tag -n1 "hero-v*"
```

---

## 版本细节备忘

### V1 — Warp 白雾蓝天

- Warp 颜色：`#ffffff00` → `#ffffff55` → `#ffffffee` → `#ffffff`
- `shape: edge`，`speed: 0.2`，CSS 饱和蓝天空渐变

### V2 — 向四周散开 SmokeRing

- 单层 SmokeRing，cloud preset 参数
- `speed: 0.35`，`colorBack: #75c1f0`
- CSS 天空 + `skyLighten`

### V3 — 第一版蓝天

- 纯 CSS 天空渐变 + 7 朵手工 puff 云
- 无 WebGL shader

### V4 — Warp 蓝带（左上更白）

- 白底页面上的 Warp：`#fff / #75c1f0 / #fff`，`checks` 纹理
- `topFade` 含左上角 radial 渐白
- `bottomFade` 从下方压成一条蓝色带
- `blur(8px)`，`opacity: 0.4`

---

## 已废弃（勿用）

- `8949e6f` 双层 SmokeRing「立体云」— 不是 V2，已弃用
