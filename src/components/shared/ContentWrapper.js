import React from 'react';

export default function ContentWrapper({
  children = [],
  className = '',
}) {
  return(
    <div class={`content-wrapper ${className}`}>
      {children}
    </div>
  );
}