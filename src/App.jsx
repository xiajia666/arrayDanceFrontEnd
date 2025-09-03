import React from 'react';
import VideoCard from './components/VideoCard';

function App() {
    return (
        <div className="App">
            <VideoCard
                videoSrc="/videos/sample.mp4"  // 放到 public/videos 下
                userName="小夏"
                description="这是我的第一个短视频"
            />
        </div>
    );
}

export default App;
