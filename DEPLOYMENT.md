# 部署指南

## 当前状态
- ✅ 前端18个页面完成
- ✅ 设计系统和组件库
- ✅ Supabase 配置
- ✅ Web3 配置
- 🔄 Android APK 打包中

## H5 部署
- URL: https://rwa-defi-chat.vercel.app/
- 自动部署：每次 push 到 main 分支

## Android APK 打包步骤

### 方法1：使用 Capacitor
```bash
npm install @capacitor/core @capacitor/cli @capacitor/android
npx cap init
npx cap add android
npm run build
npx cap sync
npx cap open android
```

### 方法2：使用 PWA
- 已配置为 PWA
- 用户可以"添加到主屏幕"

## 环境变量
需要配置：
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID

## 下一步
1. 安装 Capacitor
2. 配置 Android 项目
3. 构建 APK
4. 测试和交付
