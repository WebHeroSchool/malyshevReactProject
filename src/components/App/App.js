import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

const todoItems = ["Написать новое приложение", "Провести рефакторинг", "Протестировать"];
const App = () => (<div>
  <h1>todos</h1>
  <InputItem />
  <ItemList todoItems={todoItems} />
  <Footer count={3} />
  </div>);

export default App;
