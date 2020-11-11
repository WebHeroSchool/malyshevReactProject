import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

const Item = ({ value, isDone, onClickDone, id }) => (<button 
  onClick={() => onClickDone(id)}
  className={
  classnames({
    [styles.item]: true,
    [styles.done]: isDone
  })
}>
{value}
</button>);

export default Item;