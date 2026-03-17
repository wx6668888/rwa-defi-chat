#!/bin/bash

# Android APK 自动构建脚本

echo "🚀 开始构建 Android APK..."

# 1. 构建 Next.js 静态文件
echo "📦 构建前端..."
npm run build

# 2. 同步到 Capacitor
echo "🔄 同步到 Android..."
npx cap sync android

# 3. 构建 APK
echo "🔨 构建 APK..."
cd android
./gradlew assembleDebug

# 4. 输出结果
echo "✅ APK 构建完成！"
echo "📍 位置: android/app/build/outputs/apk/debug/app-debug.apk"
