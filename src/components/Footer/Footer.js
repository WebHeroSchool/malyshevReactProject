import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import styles from './Footer.module.css';
import PropTypes from 'prop-types';
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

const Footer = ( { count, onClickFilter, itemFilter } ) => (<div className={styles.footer}>
  <div className={styles.count}>
  {count} ITEMS LEFT
  </div>
  <div>
  <ButtonGroup variant="text" color="inherit" aria-label="text primary button group">
  <Button onClick={() => onClickFilter('all')}>
  All
  </Button>
  <Button onClick={() => onClickFilter('active')}>
  Active
  </Button>
  <Button onClick= {() => onClickFilter('done')}>
  Completed
  </Button>
  </ButtonGroup>
  </div>
  </div>);

Footer.propTypes = {
  count: PropTypes.number.isRequired
}

export default Footer;