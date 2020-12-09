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
    count: 3,
    filter: 'all'
  };

  const [items, setAppItem] = useState(initialState.items);
  const [count, setCount] = useState(initialState.count);
  const [filter, setFilter] = useState(initialState.filter);

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

  const itemFilter = (items, filter) => {
    switch(filter) {
      case 'all':
      return items;
      case 'active':
      return items.filter( item => !item.isDone);
      case 'done':
      return items.filter( item => item.isDone);
      default:
      return items;
    }
  };

  const onClickFilter = itemFilter => {
    setFilter({ itemFilter });
  };

  const visibleItems = itemFilter(items, filter);

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
      items={visibleItems}
      onClickDone={onClickDone}
      onClickDelete={onClickDelete}
      />
      <Footer
      count={count}
      onClickFilter={onClickFilter}
      filter={filter}
       />
      </div>);
  };

export default Todo;