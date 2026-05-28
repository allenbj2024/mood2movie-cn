# mood2movie 中文版

一个可直接部署到 GitHub Pages 的静态中文网站：按当前心情推荐电影，并支持切换、搜索、收藏、复制片单和复制心情链接。

## 文件

- `index.html`：页面结构
- `styles.css`：响应式视觉样式
- `app.js`：心情路由、推荐片单、收藏和复制交互
- `404.html`：GitHub Pages 直链路由兜底
- `assets/cinema-mood-bg.jpg`：站点背景图

## 部署到 GitHub Pages

推荐仓库名：`mood2movie-cn`。

1. 把这个目录作为仓库内容推送到 GitHub 的 `main` 分支。
2. 仓库会通过 `.github/workflows/pages.yml` 自动发布到 GitHub Pages。
3. 如果仓库第一次使用 Pages，需要在 Settings → Pages 里把 Source 设为 `GitHub Actions`。

站点使用纯静态文件，不需要构建步骤。
