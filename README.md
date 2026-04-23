# Akir Omni

基于 React 技术栈的跨平台应用开发脚手架，一套代码同时支持 **Web SPA**、**Windows/Linux 桌面应用**（Electron）和 **Android 移动应用**（Capacitor + Ionic React）。

## 特性

- **Web First** — 以 Web SPA 为主应用形态，Desktop 和 Android 作为平台壳层扩展
- **Monorepo 架构** — 基于 Nx 管理，共享业务逻辑、状态管理、API 层和设计系统
- **双 UI 体系** — Web/Desktop 使用 shadcn/ui（工作台风格），Android 使用 Ionic React（移动端原生体验）
- **平台抽象层** — 统一接口屏蔽平台差异，业务代码不依赖 Electron/Capacitor API
- **TypeScript 全栈** — 严格模式，全量类型覆盖
- **主题系统** — CSS Variables + Tailwind CSS 4，支持暗黑模式

## 技术栈

| 类别           | 技术                                          |
| -------------- | --------------------------------------------- |
| 语言           | TypeScript 6                                  |
| 框架           | React 19                                      |
| 构建           | Vite 8                                        |
| 路由           | React Router 7（SPA Mode）                    |
| 样式           | Tailwind CSS 4 + CSS Variables                |
| 状态管理       | Zustand 5 + TanStack Query 5                  |
| Web/Desktop UI | shadcn/ui                                     |
| Android UI     | Ionic React 8                                 |
| 桌面           | Electron 33+ / electron-builder 26+           |
| 移动端         | Capacitor 8                                   |
| 工程管理       | Nx 22 / pnpm 10                               |
| 代码质量       | Prettier 3 + lint-staged + commitlint + husky |

## 项目结构

```
akir-omni/
├── apps/
│   ├── web/                # React SPA 主应用
│   ├── desktop/            # Electron 桌面壳（main/preload）
│   └── android/            # Capacitor Android 壳
├── packages/
│   ├── core/               # @app/core — 领域模型、工具函数、通用 hooks
│   ├── api/                # @app/api — axios 实例、API 模块
│   ├── store/              # @app/store — Zustand 全局状态
│   ├── theme/              # @app/theme — 设计 Token、全局样式、暗黑模式
│   ├── platform/           # @app/platform — 平台抽象接口 + Browser/Electron/Capacitor 适配器
│   ├── ui-web/             # @app/ui-web — shadcn/ui 组件（Web/Desktop）
│   ├── ui-mobile/          # @app/ui-mobile — Ionic React 组件（Android）
│   ├── features/           # @app/features — 业务功能模块（auth 等）
│   └── config/             # @app/config — 共享配置（Prettier、commitlint）
├── .env.development        # 开发环境变量
├── .env.production         # 生产环境变量
├── .env.example            # 环境变量模板
├── nx.json                 # Nx 配置
├── tsconfig.base.json      # TypeScript 基础配置
└── pnpm-workspace.yaml     # pnpm 工作区配置
```

## 快速开始

### 前置要求

- Node.js >= 18
- pnpm 10

### 安装

```bash
git clone <repo-url>
cd akir-omni
pnpm install
```

### 环境变量

```bash
cp .env.example .env.development
```

根据实际情况修改 `.env.development` 中的配置。

### 开发

```bash
# Web 开发服务器（http://localhost:4200）
pnpm dev

# Electron 桌面开发
pnpm dev:desktop
```

### 构建

```bash
# Web 生产构建
pnpm build

# Electron 桌面打包
pnpm build:desktop

# Android 同步（需要先 build web，再通过 Android Studio 构建）
pnpm build:android
```

### 代码质量

```bash
# 格式化
pnpm format

# 格式检查
pnpm format:check

# 类型检查
pnpm typecheck
```

## 架构概览

```
┌────────────────────────────────────────────┐
│                Apps Layer                  │
│            web / desktop / android          │
├────────────────────────────────────────────┤
│             Presentation Layer             │
│        ui-web / ui-mobile / layouts        │
├────────────────────────────────────────────┤
│               Feature Layer                │
│          auth / dashboard / settings ...   │
├────────────────────────────────────────────┤
│            Application/Core Layer          │
│       store / api / domain / permissions   │
├────────────────────────────────────────────┤
│            Platform Abstraction            │
│  file / window / device / notify / storage │
├────────────────────────────────────────────┤
│             Native/Runtime Shell           │
│   Browser / Electron / Capacitor(Android)  │
└────────────────────────────────────────────┘
```

**核心原则：共享业务能力和设计语言，而不是所有端的页面结构。**

- 共享：领域模型、API 层、状态管理、主题 Token、权限体系
- 分化：页面布局、导航结构、端侧交互方式

## 依赖规则

```
apps/*        → 可依赖任何 packages/*
features/*    → 可依赖 core, api, store, platform
ui-web/*      → 可依赖 theme
ui-mobile/*   → 可依赖 theme
platform/*    → 不依赖 features, ui-*
core/*        → 不依赖任何 UI 包
api/*         → 不依赖任何 UI 包
```

## 环境变量

| 变量                | 说明         | 默认值                      |
| ------------------- | ------------ | --------------------------- |
| `VITE_APP_TITLE`    | 应用标题     | `Akir Omni`                 |
| `VITE_APP_ENV`      | 运行环境     | `development`               |
| `VITE_APP_VERSION`  | 应用版本     | `0.1.0`                     |
| `VITE_API_BASE_URL` | API 基础地址 | `http://localhost:3000/api` |

## 开发规范

- **文件命名**：kebab-case（如 `root-layout.tsx`）
- **包命名**：`@app/*`（如 `@app/core`）
- **提交信息**：Conventional Commits（如 `feat(web): add home page`）
- **代码风格**：Prettier 自动格式化，提交时通过 husky + lint-staged 检查

## 路线图

- [x] **Phase 1** — Nx Monorepo 骨架搭建（Web SPA + Electron + Capacitor 壳层）
- [ ] **Phase 2** — Web SPA 端完善（路由布局、状态管理、API 层、主题系统）
- [ ] **Phase 3** — Electron 壳层完善（IPC 通道、electron-builder 打包）
- [ ] **Phase 4** — Android 壳层完善（Capacitor 插件、移动端布局）
- [ ] **Phase 5** — 共享层打磨（平台抽象层实现、测试补齐、CI/CD）

## License

Private
