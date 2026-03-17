# 🚀 服务器部署完成

## 部署信息

**服务器 IP:** 165.154.240.3
**端口:** 3000
**访问地址:** http://165.154.240.3:3000

## 服务状态

✅ PM2 进程管理器已安装
✅ 项目已构建
✅ 服务已启动
✅ 进程名称: rwa-chat

## 管理命令

### 查看服务状态
```bash
pm2 status
```

### 查看日志
```bash
pm2 logs rwa-chat
```

### 重启服务
```bash
pm2 restart rwa-chat
```

### 停止服务
```bash
pm2 stop rwa-chat
```

### 删除服务
```bash
pm2 delete rwa-chat
```

## 自动启动

设置开机自启动:
```bash
pm2 startup
pm2 save
```

## 部署时间
2026-03-17 13:37 GMT+9
