import React, { useState, useEffect } from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';

const Todo = () => {
  const initialState = {
    items: [
    {
      value: "WRITE A NEW APP",
      isDone: true,
      id: 1
    },
    {
      value: "REFACTOR",
      isDone: false,
      id: 2
    },
    {
      value: "TEST",
      isDone: false,
      id: 3
    }
    ],
    count: 3
  };

  const [items, setAppItem, setInitialState] = useState(initialState.items);
  const [count, setCount] = useState(initialState.count);

  useEffect(() => {
    
  },);

  useEffect(() => {
    
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

  // const onClickFilterAll = id => {
  //   setInitialState(items.filter(items => items.id > 0))
  // };

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
      <InputItem onClickAdd={onClickAdd} items={items} />
      <ItemList
      items={items}
      onClickDone={onClickDone}
      onClickDelete={onClickDelete}
      />
      <Footer
      count={count}
      // onClickFilterAll={onClickFilterAll}
      // onClickFilterNotDone={onClickFilterNotDone}
      // onClickFilterDone={onClickFilterDone}
       />
      </div>);
  };

export default Todo;