import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css'

const App = () => {
  const items = [
  {
    value: "Write a new app",
    isDone: true
  },
  {
    value: "Refactor",
    isDone: false
  },
  {
    value: "Test",
    isDone: false
  }
  ];
  return (
  <div className={styles.wrap}>
    <h1 className={styles.title}>todos</h1>
    <InputItem />
    <ItemList items={items} />
    <Footer count={3} />
  </div>);
}

export default App;
