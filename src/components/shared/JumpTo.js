import React from 'react';
import Button from './Button';

export default function JumpTo({
  children = [],
}) {
  return (
    <Button className="jump-to" >
      {children}
    </Button>
  );
}