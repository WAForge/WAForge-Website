import React, { useState } from 'react';

const Button = (props) => {
    const { link, action, text, paddingx, paddingy, extraStyle } = props;

    // State to track hover state
    const [isHovered, setIsHovered] = useState(false);

    // Define the CSS classes for the span and button elements
    const spanClasses = "relative transition-all ease-in duration-75 bg-white dark:bg-[#18181b] rounded-[9.5px] " + paddingx + " " + paddingy;
    const buttonClasses = "relative inline-flex items-center justify-center p-0.5 mt-5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-[12.5px] group bg-gradient-to-br from-[#00dc82] via-[#36e4da] to-[#16a79e] group-hover:from-green-400 group-hover:shadow-lg group-hover:shadow-white dark:text-white " + extraStyle + (isHovered ? " Glow" : " NoGlow");
    
    return ( 
        <a 
            href={link}
            className={buttonClasses}
            onClick={action}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span className={spanClasses}>
                {text}
            </span>
        </a>
     );
}
 
export default Button;
