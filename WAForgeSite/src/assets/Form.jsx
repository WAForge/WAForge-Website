import { PopupButton } from '@typeform/embed-react'
import React, { useState } from 'react';


const Form = (props) => {
    const { link, action, text, paddingx, paddingy, extraStyle } = props;
    const [isHovered, setIsHovered] = useState(false);
    const buttonClasses = "mt-10 relative inline-flex items-center justify-center p-0.5 mt-5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-[12.5px] group bg-gradient-to-br from-[#00dc82] via-[#36e4da] to-[#16a79e] group-hover:from-green-400 group-hover:shadow-lg group-hover:shadow-white hover:shadow-[0_0px_60px_0px_rgba(0,0,0)] dark:text-white " + extraStyle + (isHovered ? " Glow" : " NoGlow");

    const spanClasses = "relative transition-all ease-in duration-75 bg-white dark:bg-[#18181b] rounded-[9.5px] " + paddingx + " " + paddingy;

    return (
        <PopupButton id="dn0SdXrn" className={buttonClasses}>
            <span className={spanClasses}>Sign Up</span>
        </PopupButton>
    )
}
export default Form;