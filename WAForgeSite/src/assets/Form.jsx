import { PopupButton } from '@typeform/embed-react'
import React, { useState } from 'react';
 
 
const Form = (props) => {
  const { link, action, text, paddingx, paddingy, extraStyle } = props;
  const [isHovered, setIsHovered] = useState(false);
  const buttonClasses = "font-Montserrat mt-10 relative inline-flex items-center justify-center p-0.5 mt-5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-[12.5px] group bg-gradient-to-br from-[#00dc82] via-[#36e4da] to-[#16a79e] group-hover:from-green-400 hover:shadow-[0_0px_15px_0px_rgba(0,255,130,1)] group-hover:shadow-white duration-[0.1s] dark:text-white " + extraStyle;

  const spanClasses = "relative transition-all ease-in duration-75 bg-white dark:bg-[#18181b] rounded-[9.5px] font-[400] " + paddingx + " " + paddingy;

  return (
      <PopupButton id="dn0SdXrn" className={buttonClasses}>
          <span className={spanClasses}>Sign Up</span>
      </PopupButton>
  )
}
 
export default Form;