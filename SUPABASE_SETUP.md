# Supabase 部署指南

## 自动部署步骤

### 1. 创建 Supabase 项目
访问 https://supabase.com 并创建免费项目

### 2. 执行数据库脚本
在 Supabase Dashboard > SQL Editor 中执行：

```sql
-- 复制 supabase/schema.sql 的内容并执行
-- 复制 supabase/seed.sql 的内容并执行
```

### 3. 获取环境变量
在 Project Settings > API 中获取：
- Project URL
- anon public key

### 4. 配置 Vercel 环境变量
在 Vercel Dashboard 中添加：
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY

### 5. 重新部署
推送代码到 GitHub，Vercel 自动部署

## 当前状态
- ✅ 数据库结构已设计
- ✅ API 服务已创建
- ✅ 钱包连接已集成
- 🔄 需要配置真实 Supabase 项目
