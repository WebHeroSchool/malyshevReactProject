import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
  state = {
    items: [
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
    ]
  }; 
  render() {
    return (
      <div className={styles.wrap}>
      <h1 className={styles.title}>todos</h1>
      <InputItem />
      <ItemList items={this.state.items} />
      <Footer count={3} />
      </div>);
    }
  };

export default App;
