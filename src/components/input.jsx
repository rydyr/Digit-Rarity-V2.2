import React from 'react';
import './input.css';

class Input extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return(
      <div className="inputArea">
        <input type="number" placeholder="(000 - 99999999)" value={this.props.value} onChange={(e) => this.props.onChange(e.target.value)} className="textInput" />
      </div>
    );
  }
}

export default Input;