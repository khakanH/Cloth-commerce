import React from 'react';
import './custom-button.scss';


const CustomButton =({children, isgooglesignin, ...Otherprops})=>(
    <button className={`${isgooglesignin ? "googlesignin":""} custom-button`} {...Otherprops}>
        {children}
    </button>

)

export default CustomButton;