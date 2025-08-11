import React, { useState, useEffect } from 'react'

export const CountdownTimer = ({ expires }) => {
    const [timeLeft, setTimeLeft] = useState(expires);

    useEffect(() => {
        if (!expires) return;

        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                const newTime = { ...prevTime };
                
                if (newTime.seconds > 0) {
                    newTime.seconds--;
                } else if (newTime.minutes > 0) {
                    newTime.minutes--;
                    newTime.seconds = 59;
                } else if (newTime.hours > 0) {
                    newTime.hours--;
                    newTime.minutes = 59;
                    newTime.seconds = 59;
                } else if (newTime.days > 0) {
                    newTime.days--;
                    newTime.hours = 23;
                    newTime.minutes = 59;
                    newTime.seconds = 59;
                }

                return newTime;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [expires]);

    if (!expires) return null;

    const isExpiringSoon = timeLeft.days === 0 && timeLeft.hours < 24;
    const isCritical = timeLeft.days === 0 && timeLeft.hours < 1;

    return (
        <div className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
            isCritical 
                ? 'bg-red-100 text-red-700 animate-pulse' 
                : isExpiringSoon 
                    ? 'bg-orange-100 text-orange-700' 
                    : 'bg-blue-100 text-blue-700'
        }`}>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>
                {timeLeft.days > 0 && `${timeLeft.days}d `}
                {timeLeft.hours > 0 && `${timeLeft.hours}h `}
                {timeLeft.minutes > 0 && `${timeLeft.minutes}m `}
                {timeLeft.seconds}s
            </span>
        </div>
    );
};