import React from 'react';
import '../../stylesheets/components/shared/ContentWrapper.css';

export default function ContentWrapper({
  children = [],
  className = '',
}) {
  return(
    <div className={`content-wrapper ${className}`}>
      {children}
    </div>
  );
}