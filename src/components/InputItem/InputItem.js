import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class InputItem extends React.Component {
  state = {
    inputValue: '',
    error: false,
    errorMessage: '',
    buttonColor: 'default',
    buttonEnabled: false
  };

  runErr = (message) => {
    this.setState({errorMessage: message, error: true, buttonColor: 'secondary'})
  }

  onButtonClick = (event) => {
    this.setState({
      inputValue: event.target.value.toUpperCase(),
      buttonEnabled: event.target.value.length > 0
    });

    this.props.onClickAdd(this.state.inputValue);
  }

  render() {
    const { onClickAdd, items } = this.props;

    return (<div>
      <TextField
      id="standard-full-width"
      style={{ margin: 8 }}
      placeholder="What needs to be done?"
      helperText={this.state.errorMessage}
      fullWidth
      value={this.state.inputValue}
      onChange={event => this.setState({ inputValue: event.target.value.toUpperCase() })}
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
       />
       <Button
       variant="outlined"
       fullWidth
       color={this.state.buttonColor}
       onClick={() => {
        let itemCheck = false;

        items.forEach( (items) => {
          if (this.state.inputValue === items.value) {
            itemCheck = true;
          } 
        });
        
        if (this.state.inputValue !== '' && !itemCheck) {
          onClickAdd(this.state.inputValue);
          this.setState({
            inputValue: '',
            error: false,
            errorMessage: '',
            buttonColor: 'default',
            buttonEnabled: false
          });
        } else if (this.state.inputValue === '') {
          this.runErr('You can not add an empty case');
        } else if (itemCheck) {
          this.runErr('You cannot add a case that already exists');
          this.setState({
            inputValue: ''
          });
        }
      }}
      >
       Add
       </Button>
       </div>
    );
  }
}

export default InputItem;