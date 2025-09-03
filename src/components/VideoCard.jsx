import React from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react'; // 需要安装 lucide-react

const VideoCard = ({ videoSrc, userName, description }) => {
    return (
        <div className="video-card" style={styles.container}>
            {/* 视频 */}
            <video
                src={videoSrc}
                autoPlay
                muted
                loop
                style={styles.video}
            ></video>

            {/* 右侧按钮栏 */}
            <div style={styles.rightBar}>
                <div style={styles.iconContainer}>
                    <Heart size={32} color="white" />
                    <span style={styles.iconText}>123K</span>
                </div>
                <div style={styles.iconContainer}>
                    <MessageCircle size={32} color="white" />
                    <span style={styles.iconText}>456</span>
                </div>
                <div style={styles.iconContainer}>
                    <Share2 size={32} color="white" />
                    <span style={styles.iconText}>Share</span>
                </div>
            </div>

            {/* 视频描述 */}
            <div style={styles.desc}>
                <strong>{userName}</strong>: {description}
            </div>
        </div>
    );
};

// 简单内联样式
const styles = {
    container: {
        position: 'relative',
        width: '360px',
        height: '640px',
        overflow: 'hidden',
        borderRadius: '16px',
        backgroundColor: 'black',
    },
    video: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    rightBar: {
        position: 'absolute',
        right: '10px',
        bottom: '100px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
    },
    iconText: {
        marginTop: '4px',
        fontSize: '14px',
        color: 'white',
    },
    desc: {
        position: 'absolute',
        left: '10px',
        bottom: '20px',
        color: 'white',
        fontSize: '16px',
    },
};

export default VideoCard;
