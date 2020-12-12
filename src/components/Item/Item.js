import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

class Item extends React.Component {
  render() {
    const { value, isDone, onClickDone, onClickDelete, id } = this.props;

    return (<div
      className={styles.wraper}>
      <div>
      <button
      onClick={() => onClickDone(id)}
      className={
        classnames({
          [styles.item]: true,
          [styles.done]: isDone
        })
      }>
      {value}
      </button>
      </div>
      <div>
      <IconButton aria-label="delete" onClick={() => onClickDelete(id)}>
      <DeleteIcon fontSize="small" />
      </IconButton>
      </div>
      </div>);
  }
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  isDone: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onClickDone: PropTypes.func,
  onClickDelete: PropTypes.func 
}

export default Item;