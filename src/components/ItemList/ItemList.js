import Item from '../Item/Item';

const ItemList = ( { itemFilter, onClickDone, onClickDelete, id }) => (<ul>
  {itemFilter().map(item => <li key={item.id}>
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