import React from 'react';
import VideoCard from './components/VideoCard';

function App() {
    return (
        <div className="App">
            <div style={{ display: "flex", gap: "20px" }}>
                <VideoCard
                    videoSrc="/videos/sample.mp4"
                    userName="机甲"
                    description="这是我的第一个短视频"
                />
                <VideoCard
                    videoSrc="/videos/202599-164491.mp4"
                    userName="机甲"
                    description="这是我的第二个短视频"
                />
                <VideoCard
                    videoSrc="/videos/202599-324623.mp4"
                    userName="机甲"
                    description="这是我的第三个短视频"
                />
                <VideoCard
                    videoSrc="/videos/202599-326842.mp4"
                    userName="机甲"
                    description="这是我的第四个短视频"
                />
                <VideoCard
                    videoSrc="/videos/202599-644025.mp4"
                    userName="机甲"
                    description="这是我的第n个短视频"
                />
            </div>

        </div>
    );
}

export default App;
