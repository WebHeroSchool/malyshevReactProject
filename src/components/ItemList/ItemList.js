import Item from '../Item/Item';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const ItemList = ( {items}) => (<ul>
  {items.map(item => <li key={item.value}>
    <Item value={item.value} isDone={item.isDone} />
    <IconButton aria-label="delete">
    <DeleteIcon fontSize="small" />
    </IconButton>
    </li>)}
</ul>)

export default ItemList;