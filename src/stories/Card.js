import React from 'react';
import './card.css';

export const Card = (props) => {

  const { variant, layout } = props;
  const cssStyle = variant + " " + layout;

  return (
    <div className={cssStyle}>
      {props.label}
    </div>
  )
}
