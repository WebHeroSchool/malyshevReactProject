import React, { useState, useEffect } from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const App = () => {
  const initialState = {
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
    ],
    count: 3
  };

  const [items, setAppItem] = useState(initialState.items);
  const [count, setCount] = useState(initialState.count);

  useEffect(() => {
    console.log('update');
  },);

  useEffect(() => {
    console.log('mount');
  }, [])

  const onClickDone = id => {
    const newItemList = items.map(item => {
      const newItem = { ...item };

      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }

      return newItem;
    });

    setAppItem(newItemList);
  };

  const onClickDelete = id => { 
    setAppItem(items.filter(item => item.id !== id));
    setCount(count - 1)
  };

  const onClickAdd = value => {
    const newItems = [
    ...items,
    {
      value,
      isDone: false,
      id: count + 1
    }
    ];
    setAppItem(newItems);
    setCount(count + 1)
  };

    return (
      <div className={styles.wrap}>
      <h1 className={styles.title}>todos</h1>
      <InputItem onClickAdd={onClickAdd} />
      <ItemList
      items={items}
      onClickDone={onClickDone}
      onClickDelete={onClickDelete}
      />
      <Footer count={count} />
      </div>);
  };

export default App;
