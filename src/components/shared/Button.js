import React from 'react';
import '../../stylesheets/components/shared/Button.css';

export default function button({
  id = null,
  name = null,
  className = null,
  children = [],
}) {
  return(
    <button 
      id={id} 
      name={name}
      className={className}
    >
      {children}
    </button>
  );
}