import Item from '../Item/Item';

const ItemList = ( {todoItem}) => (<ul>
	<li><Item todoItem={todoItem} /></li>
	<li><Item todoItem={'Провести рефакторинг'} /></li>
	<li><Item todoItem={'Протестировать'} /></li>
</ul>)

export default ItemList;