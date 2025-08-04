const fetch = require('node-fetch');

const BBC_NEWS_API_URL = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=YOUR_API_KEY';

async function fetchNews() {
    try {
        const response = await fetch(BBC_NEWS_API_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.articles.map(article => ({
            title: article.title,
            description: article.description,
            url: article.url,
        }));
    } catch (error) {
        console.error('Failed to fetch news:', error);
        return [];
    }
}

module.exports = {
    fetchNews,
};