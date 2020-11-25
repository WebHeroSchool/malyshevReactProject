import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class InputItem extends React.Component {
  state = {
    inputValue: '',
    buttonEnabled: false
  };

  onButtonClick = (event) => {
    this.setState({
      inputValue: event.target.value.toLowerCase(),
      buttonEnabled: event.target.value.length > 0
    });

    this.props.onClickAdd(this.state.inputValue);
  }

  render() {
    const { onClickAdd } = this.props;

    return (<div>
      <TextField
      id="standard-full-width"
      style={{ margin: 8 }}
      placeholder="What needs to be done?"
      fullWidth
      value={this.state.inputValue}
      onChange={event => this.setState({ inputValue: event.target.value.toLowerCase() })}
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
       />
       <Button
       variant="outlined"
       fullWidth
       onClick={() => {
        if (this.state.inputValue !== '') {
          onClickAdd(this.state.inputValue);
          this.setState({
            inputValue: '',
            buttonEnabled: false
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