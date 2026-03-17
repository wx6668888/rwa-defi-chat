# RWA DeFi Chat

一个完整的去中心化聊天应用，集成 DeFi 功能。

## 🚀 在线访问

**H5 应用:** https://rwa-defi-chat.vercel.app/

## ✨ 核心功能

- 💬 实时聊天
- 🧧 红包系统
- 💎 质押管理
- 🎰 Lucky Draw
- 👥 推荐系统
- 🔗 Web3 钱包连接

## 📱 支持平台

- ✅ H5 (已部署)
- ✅ Android (APK 自动构建)
- 🔄 iOS (Capacitor 支持)

## 🛠️ 技术栈

- **前端:** Next.js 16, React 19, TypeScript, Tailwind CSS
- **后端:** Supabase (PostgreSQL + Realtime)
- **Web3:** MetaMask, Wagmi, Viem
- **移动端:** Capacitor

## 📦 快速开始

### 1. 克隆项目
```bash
git clone https://github.com/wx6668888/rwa-defi-chat.git
cd rwa-defi-chat
```

### 2. 安装依赖
```bash
npm install
```

### 3. 配置环境变量
创建 `.env.local`:
```bash
NEXT_PUBLIC_SUPABASE_URL=你的Supabase URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=你的Supabase Key
```

### 4. 运行开发服务器
```bash
npm run dev
```

访问 http://localhost:3000

## 📱 构建 Android APK

### 自动构建 (推荐)
推送代码到 GitHub，Actions 自动构建 APK

### 手动构建
```bash
./build-apk.sh
```

APK 位置: `android/app/build/outputs/apk/debug/app-debug.apk`

## 📚 文档

- [最终交付文档](FINAL_DELIVERY.md)
- [Supabase 配置](SUPABASE_SETUP.md)
- [部署指南](DEPLOYMENT.md)
- [安全审查报告](reports/security-audit-1.md)
- [QA 测试报告](reports/qa-test-1.md)
- [性能优化报告](reports/performance-audit-1.md)

## 📁 项目结构

```
rwa-defi-chat/
├── app/                    # Next.js 页面
├── components/             # React 组件
├── lib/                    # 工具和服务
│   ├── services/          # API 服务
│   ├── hooks/             # React Hooks
│   └── context/           # 全局状态
├── supabase/              # 数据库脚本
├── android/               # Android 项目
├── reports/               # 审查报告
└── .github/workflows/     # CI/CD
```

## 🔒 安全

- XSS 防护
- 输入过滤
- Supabase RLS
- 环境变量保护

## 📊 数据库

完整的数据库结构:
- users (用户)
- channels (频道)
- messages (消息)
- red_packets (红包)
- staking (质押)
- notifications (通知)

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request
