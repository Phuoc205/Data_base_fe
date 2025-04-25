import React from 'react';
import { useNavigate } from 'react-router-dom';
import './button.css'

/*
const props = {
   props.className
   props.icon
   props.content
   props.link
}
*/

function Button(props) {
   const navigate = useNavigate();

   const handleClick = () => {
      navigate(props.link);
   };

   return (
      <button onClick={handleClick} className={props.className}>
         {props.icon}
         {props.content}
      </button>
   );
}

export default Button