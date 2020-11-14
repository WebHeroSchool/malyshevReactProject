import Item from '../Item/Item';

const ItemList = ( { items, onClickDone, onClickDelete, id }) => (<ul>
  {items.map(item => <li key={item.id}>
    <Item
    value={item.value}
    isDone={item.isDone}
    id={item.id}
    onClickDone={onClickDone}
    onClickDelete={onClickDelete}
     />
    </li>)}
</ul>)

export default ItemList;