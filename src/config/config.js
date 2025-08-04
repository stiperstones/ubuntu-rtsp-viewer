const config = {
    rtspStreams: [
        'rtsp://example.com/stream1',
        'rtsp://example.com/stream2',
        'rtsp://example.com/stream3',
        'rtsp://example.com/stream4',
        'rtsp://example.com/stream5',
        'rtsp://example.com/stream6'
    ],
    openWeatherMapApiKey: 'YOUR_API_KEY_HERE',
    location: {
        latitude: 'YOUR_LATITUDE_HERE',
        longitude: 'YOUR_LONGITUDE_HERE'
    },
    newsApiUrl: 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=YOUR_NEWS_API_KEY_HERE'
};

export default config;