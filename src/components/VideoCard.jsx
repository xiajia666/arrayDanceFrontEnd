import React from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

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

            {/* 右下角按钮栏 */}
            <div style={styles.rightBar}>
                <div style={styles.iconContainer}>
                    <Heart size={28} color="white" />
                    <span style={styles.iconText}>123K</span>
                </div>
                <div style={styles.iconContainer}>
                    <MessageCircle size={28} color="white" />
                    <span style={styles.iconText}>456</span>
                </div>
                <div style={styles.iconContainer}>
                    <Share2 size={28} color="white" />
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

// 横屏样式
const styles = {
    container: {
        position: 'relative',
        width: '360px',   // 宽度更大
        height: '720px',  // 高度更小
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
        right: '20px',
        bottom: '20px',
        display: 'flex',
        flexDirection: 'row', // 横向排布按钮
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
        fontSize: '12px',
        color: 'white',
    },
    desc: {
        position: 'absolute',
        left: '20px',
        bottom: '20px',
        color: 'white',
        fontSize: '16px',
    },
};

export default VideoCard;
