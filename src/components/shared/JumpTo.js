import React from 'react';
import Button from './Button';

import '../../stylesheets/components/shared/JumpTo.css';

export default class JumpTo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.jumpToTarget = this.jumpToTarget.bind(this);
  }

  jumpToTarget() {
    const { target } = this.props;
    document.getElementById(target).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  render() {
    const {
      children = [],
    } = this.props;

    return (
      <Button
        className="jump-to"
        onClick={this.jumpToTarget}
      >
        {children}
      </Button>
    );
  }
}