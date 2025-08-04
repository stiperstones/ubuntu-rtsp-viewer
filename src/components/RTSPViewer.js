import React, { useEffect, useState } from 'react';
import HLS from 'hls.js';

const RTSPViewer = () => {
    const [streams, setStreams] = useState([
        'rtsp://example.com/stream1',
        'rtsp://example.com/stream2',
        'rtsp://example.com/stream3',
        'rtsp://example.com/stream4',
        'rtsp://example.com/stream5',
        'rtsp://example.com/stream6'
    ]);

    useEffect(() => {
        streams.forEach((stream, index) => {
            const video = document.getElementById(`video-${index}`);
            if (Hls.isSupported()) {
                const hls = new Hls();
                hls.loadSource(stream);
                hls.attachMedia(video);
                hls.on(Hls.Events.MANIFEST_PARSED, () => {
                    video.play();
                });
            } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                video.src = stream;
                video.addEventListener('loadedmetadata', () => {
                    video.play();
                });
            }
        });
    }, [streams]);

    return (
        <div className="rtsp-viewer">
            {streams.map((stream, index) => (
                <video key={index} id={`video-${index}`} className="video-feed" controls />
            ))}
        </div>
    );
};

export default RTSPViewer;