# RWA Protocol - DeFi Chat App

基于 BNB Chain 的 DeFi 即时聊天工具

## 🚀 快速开始

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 http://localhost:3000

### 部署到 Vercel

1. Fork 这个仓库
2. 在 Vercel 导入项目
3. 一键部署

或者点击：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/wx6668888/rwa-defi-chat)

## 📱 已完成页面

- ✅ 启动页 (/) - 钱包连接
- ✅ 频道列表 (/channels) - 主页

## 🛠️ 技术栈

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- ethers.js (即将集成)

## 📦 项目结构

```
rwa-defi-chat/
├── app/                 # 页面
│   ├── page.tsx        # 启动页
│   └── channels/       # 频道列表
├── components/         # 组件
│   ├── bottom-nav.tsx
│   └── node-hexagon-grid.tsx
└── lib/               # 工具函数
    └── constants.ts
```

## 🎨 设计系统

- 暗色主题
- 字体: Inter + Space Grotesk + JetBrains Mono
- 颜色: Plasma Cyan (#00f5d4) + Accent Gold (#f59e0b)

## 📄 License

MIT
