import { useState, useEffect, useRef } from 'react';
import { AlertCircle } from 'lucide-react';

const ErrorTooltip = ({ message, isVisible, position = 'bottom' }) => {
    const [show, setShow] = useState(false);
    const tooltipRef = useRef(null);

    useEffect(() => {
        if (isVisible && message) {
            setShow(true);
        } else {
            setShow(false);
        }
    }, [isVisible, message]);

    if (!show || !message) return null;

    const positionClasses = {
        top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
        bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
        left: 'right-full top-1/2 -translate-y-1/2 mr-2',
        right: 'left-full top-1/2 -translate-y-1/2 ml-2'
    };

    const arrowClasses = {
        top: 'top-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-black',
        bottom: 'bottom-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-black',
        left: 'left-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-black',
        right: 'right-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-black'
    };

    const arrowInnerClasses = {
        top: 'top-[calc(100%-1px)] left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-white',
        bottom: 'bottom-[calc(100%-1px)] left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-white',
        left: 'left-[calc(100%-1px)] top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-white',
        right: 'right-[calc(100%-1px)] top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-white'
    };

    return (
        <div
            ref={tooltipRef}
            className={`absolute ${positionClasses[position]} z-50 animate-fade-in`}
            style={{ width: 'max-content' }}
        >
            <div className="bg-white text-gray-800 rounded-sm shadow-lg flex items-stretch border border-black overflow-hidden">
                <div className="bg-orange-500 p-2 flex items-center justify-center">
                    <AlertCircle size={16} className="text-white" fill="white" stroke="orange" />
                </div>
                <div className="px-3 py-1.5 flex items-center bg-white">
                    <span className="text-[13px] font-semibold text-gray-700 whitespace-nowrap">{message}</span>
                </div>
            </div>
            {/* Outer Border Arrow */}
            <div
                className={`absolute ${arrowClasses[position]} border-[8px]`}
                style={{ width: 0, height: 0, zIndex: 49 }}
            />
            {/* Inner White Arrow (to hide border) */}
            <div
                className={`absolute ${arrowInnerClasses[position]} border-[7px]`}
                style={{ width: 0, height: 0, zIndex: 51 }}
            />
        </div>
    );
};

export default ErrorTooltip;
