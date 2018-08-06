import React from 'react';
import '../../stylesheets/components/shared/Input.css';

export default class Input extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      error: null,
    }
  }

  onChange = (event) => {
    console.log(event);
    // this.setState()
  }

  render() {
    const {
      id = null,
      type = null,
      placeholder = null,
      name = null,
    } = this.props;

    return(
      <input
        className="input"
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={this.onChange}
      />
    );
  }
}