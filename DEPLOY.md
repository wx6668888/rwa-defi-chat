# 部署指南

## 方式1: 手动上传到 GitHub（最简单）

1. 在本地下载项目文件
2. 在 GitHub 仓库页面点击 "Add file" → "Upload files"
3. 拖拽所有文件上传
4. 提交

## 方式2: 使用 Git 命令

```bash
# 在你的本地电脑执行
git clone https://github.com/wx6668888/rwa-defi-chat.git
cd rwa-defi-chat

# 复制项目文件到这个目录
# 然后执行：
git add .
git commit -m "Initial commit"
git push origin main
```

## 方式3: 直接在 Vercel 部署

1. 访问 https://vercel.com
2. 点击 "New Project"
3. 导入 GitHub 仓库: wx6668888/rwa-defi-chat
4. 点击 "Deploy"

## 当前项目文件列表

需要上传的文件：
- app/
  - layout.tsx
  - page.tsx
  - globals.css
  - channels/page.tsx
- components/
  - bottom-nav.tsx
  - node-hexagon-grid.tsx
- lib/
  - constants.ts
- package.json
- tailwind.config.ts
- tsconfig.json
- next.config.ts
- postcss.config.mjs
- README.md

## 部署后访问

部署成功后，Vercel 会提供一个 URL，例如：
https://rwa-defi-chat.vercel.app

你可以立即访问查看效果！
