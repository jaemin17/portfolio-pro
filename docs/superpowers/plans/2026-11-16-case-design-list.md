# Case Design List Implementation Plan

**Goal:** 将已统一8px间距的普通设计说明列表提取为真实共享组件，规范页展示同一组件实例，现有案例外观与文案保持。

**Architecture:** 新增服务端组件CaseDesignList，接受li子节点和局部className。CSS Module负责普通列表的默认16px/400/60%、1.65行高和8px条目空隙；项目保留缩进差异、Selfly手机14px、重点文字颜色、自定义圆点和列表上方标题。使用CSS变量保留两种现有缩进及手机字号，不加入项目名变体，不改变标题层级。反思和提示列表不迁移。

**Tech Stack:** Next.js App Router、React、TypeScript、CSS Modules。已读本地CSS指南；不新增依赖或客户端逻辑。

用户已同意先做设计说明列表组件并保持外观，另明确要求规范页展示实际组件示例。本计划落实既有授权，不提交或推送。

- [x] 保存四页中英文宽窄屏的改前样式和列表几何信息。
- [x] 新增src/components/CaseDesignList.tsx和对应CSS Module，迁移Selfly、模型编辑器、VR教育、XR课件实际普通设计说明列表。
- [x] 删除迁移范围内重复的普通列表基础样式；保留主题、标题、强调、圆点、特定字号及缩进。
- [x] 规范页在设计说明列表规则中直接渲染CaseDesignList实际示例；正式规范记录真实来源与用途例外。
- [x] 验证中英文390/768/1280、相关断点与规范页；比对改前样式、列表换行/尺寸、受保护内容，保存实际截图。
- [x] ESLint、生产构建和git diff --check，记录结果并恢复视口。
