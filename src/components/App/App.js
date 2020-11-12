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
      isDone: true,
      id: 1
    },
    {
      value: "Refactor",
      isDone: false,
      id: 2
    },
    {
      value: "Test",
      isDone: false,
      id: 3
    }
    ]
  };

  onClickDone = id => {
    const newItemList = this.state.items.map(item => {
      const newItem = { ...item };

      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }

      return newItem;
    });

    this.setState({ items: newItemList });
  };

  onClickDelete = id => {
    const itemsArr = this.state.items.filter(item => item.id !== id );

    this.setState({ items: itemsArr });
  };

  render() {
    return (
      <div className={styles.wrap}>
      <h1 className={styles.title}>todos</h1>
      <InputItem />
      <ItemList
      items={this.state.items}
      onClickDone={this.onClickDone}
      onClickDelete={this.onClickDelete}
      />
      <Footer count={3} />
      </div>);
    }
  };

export default App;
