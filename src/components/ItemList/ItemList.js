import Item from '../Item/Item';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const ItemList = ( { items, onClickDone }) => (<ul>
  {items.map(item => <li key={item.value}>
    <Item
    value={item.value}
    isDone={item.isDone}
    id={item.id}
    onClickDone={onClickDone}
     />
    <IconButton aria-label="delete">
    <DeleteIcon fontSize="small" />
    </IconButton>
    </li>)}
</ul>)

export default ItemList;