import React from "react";
import { Heart, MessageCircle, Share2 } from "lucide-react";

const Sidebar = ({ likes, comments, shares }) => {
    return (
        <div className="absolute right-5 bottom-32 flex flex-col items-center space-y-6 text-white">
            <div className="flex flex-col items-center">
                <Heart className="w-8 h-8" />
                <span>{likes}</span>
            </div>
            <div className="flex flex-col items-center">
                <MessageCircle className="w-8 h-8" />
                <span>{comments}</span>
            </div>
            <div className="flex flex-col items-center">
                <Share2 className="w-8 h-8" />
                <span>{shares}</span>
            </div>
        </div>
    );
};

export default Sidebar;
