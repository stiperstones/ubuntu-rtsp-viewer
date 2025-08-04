import React, { useEffect, useState } from 'react';
import { fetchNews } from '../services/newsService';

const NewsScroll = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const getNews = async () => {
            const newsData = await fetchNews();
            setNews(newsData);
        };

        getNews();
        const interval = setInterval(getNews, 60000); // Refresh news every minute

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="news-scroll">
            {news.length > 0 ? (
                news.map((item, index) => (
                    <div key={index} className="news-item">
                        {item.title}
                    </div>
                ))
            ) : (
                <div className="news-item">Loading news...</div>
            )}
        </div>
    );
};

export default NewsScroll;