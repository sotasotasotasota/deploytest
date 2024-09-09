// netlify/functions/fetchNews.js
const fetch = require('node-fetch');

exports.handler = async function(event, context) {
    const apiKey = process.env.NEWS_API_KEY; // Netlifyに設定した環境変数を取得
    const url = `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch news' })
        };
    }
};
