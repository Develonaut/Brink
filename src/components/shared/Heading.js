import React from 'react';

export default function Heading({
  children = [],
}) {
  return (
    <h1 class="heading">{children}</h1>
  )
}