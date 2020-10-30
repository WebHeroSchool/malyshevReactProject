import Item from '../Item/Item';

const ItemList = ( {todoItems}) => (<ul>
	<li><Item todoItems={todoItems[0]} /></li>
	<li><Item todoItems={todoItems[1]} /></li>
	<li><Item todoItems={todoItems[2]} /></li>
</ul>)

export default ItemList;