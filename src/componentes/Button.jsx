import React from 'react';
import './button.css'

const Button = ({children,onClick}) => {
    return (  
<button onClick={onClick}  className='botton'>
{children}
</button>

    );
}
 
export default Button;