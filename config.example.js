// 复制此文件为 config.js，填入你的 DeepSeek API Key
// cp config.example.js config.js
// 然后编辑 config.js，将 sk-your-key-here 替换为真实的 Key

window.DEEPSEEK_API_KEY = 'sk-your-key-here';
window.DEEPSEEK_MOVIE_COUNT = 10; // 每次推荐电影数量，可调整为 5-20

// TMDB（The Movie Database）API Key，用于显示真实电影海报
// 通过服务器代理访问（api.themoviedb.org 在国内被墙，nginx 反代 api.tmdb.org）
// 免费申请：https://www.themoviedb.org/settings/api （填 API Key v3）
window.TMDB_API_KEY = 'your-tmdb-key-here';
