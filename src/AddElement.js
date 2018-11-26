import React,{ Component } from 'react';

export default class AddElementForm extends Component {  
 state = {
    value: '',
  }
  loadValue = event => {
    event.preventDefault();
    this.props.addItem(this.state.value);
    this.setState({ value: '' });
  };
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  inputIsEmpty = () => {
    return this.state.value === '';
  };
  render() {
    
   return (<form onSubmit={this.loadValue}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>)
}
}
