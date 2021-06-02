import React from 'react';
import './footer.css';

export const Footer = (props) => {
  return (
    <div className={props.align}>
      <hr/>
      <p>{props.children}</p>
    </div>
  )
}