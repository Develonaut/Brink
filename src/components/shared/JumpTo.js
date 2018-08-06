import React from 'react';
import Button from './Button';

import '../../stylesheets/components/shared/JumpTo.css';

export default function JumpTo({
  children = [],
}) {
  return (
    <Button className="jump-to" >
      {children}
    </Button>
  );
}