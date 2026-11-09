const http = require('http');

const PORT = 3000;
const NAME = '小倩';

const server = http.createServer((req, res) => {
  const now = new Date();
  const timeStr = now.toLocaleString('zh-CN', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello World</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      font-family: 'Segoe UI', 'Microsoft YaHei', sans-serif;
      color: #fff;
    }
    h1 {
      font-size: 2.5rem;
      margin-bottom: 30px;
      text-shadow: 0 2px 10px rgba(0,0,0,0.2);
      text-align: center;
      padding: 0 20px;
    }
    .time-box {
      background: rgba(255,255,255,0.2);
      backdrop-filter: blur(10px);
      padding: 20px 40px;
      border-radius: 12px;
      font-size: 1.5rem;
      border: 1px solid rgba(255,255,255,0.3);
    }
    .time-label { font-size: 1rem; opacity: 0.8; margin-bottom: 8px; }
  </style>
</head>
<body>
  <h1>Hello World！我是${NAME}，我的第一个AI开发的网站</h1>
  <div class="time-box">
    <div class="time-label">当前服务器时间</div>
    <div id="server-time">${timeStr}</div>
  </div>
</body>
</html>`);
});

server.listen(PORT, () => {
  console.log(`服务器已启动: http://localhost:${PORT}`);
});
