# Shared Section Navigation Implementation Plan

**Goal:** 规范目录与案例目录使用共享章节目录组件，字号统一16px；规范页组件章节展示真实实例。

**Architecture:** SectionNav客户端组件接收sections、ariaLabel、className与vertical/responsive排版选项，复用现有案例目录的当前位置跟随逻辑。组件CSS管理16px/400/1.5、链接状态、键盘焦点与默认16px条目间距。CaseStudyNav保留兼容封装，页面只负责sticky、外部留白及窄屏可见性；规范页桌面现有20px条目间距与颜色通过局部变量保留。案例≤768px隐藏、规范≤768px横向换行，组件示例不sticky。

用户已同意组件化与16px。当前已在原工作区完成一系列未提交的授权修改，继续原地整理，不创建新工作区、不提交或推送。

- [x] 核对七个现行案例引用情况，保存四个实际案例目录与规范目录的改前运行时数据。
- [x] 提取SectionNav及CSS，CaseStudyNav改为兼容封装，迁移规范目录。
- [x] 保留页面布局和窄屏行为；规范组件章节增加真实目录实例，更新正式规范。
- [x] 验证所有案例的隐藏/显示、目录链接、活动章节、键盘焦点；规范中英文宽窄屏、目录示例及断点。
- [x] ESLint、构建、git diff --check；截图、结果记录、恢复视口，不提交推送。
