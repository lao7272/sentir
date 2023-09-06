import {MouseEventHandler, CSSProperties} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface ArrowProps {
    className?: string,
    onClick?: MouseEventHandler<HTMLDivElement>,
    style?: CSSProperties
}
export function NextArrow({onClick, style, className}: ArrowProps) {
    return (
        <div
        style={{...style}}
        onClick={onClick} 
        className={`${className} about-arrow left-arrow`}
        >
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'><path d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/></svg>
        </div>
    );
}

export function PrevArrow({onClick, style, className}: ArrowProps) {
    return (
        <div 
        style={{...style}}
        onClick={onClick}
        className={`${className} about-arrow right-arrow`}
        >
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'><path d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/></svg>
        </div>
    );
}