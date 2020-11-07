import TextField from '@material-ui/core/TextField';

const InputItem = () => (<div>
  <TextField
  id="standard-full-width"
  style={{ margin: 8 }}
  placeholder="What needs to be done?"
  fullWidth
  margin="normal"
  InputLabelProps={{
    shrink: true,
  }}
   />
   </div>)

export default InputItem;