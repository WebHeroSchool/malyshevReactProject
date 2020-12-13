import React from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import MenuList from '@material-ui/core/MenuList';
import styles from './App.module.css';
import About from '../About/About';
import Todo from '../Todo/Todo';
import Contacts from '../Contacts/Contacts';
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

const App = () =>
(<Router>
  <div className={styles.wrap}>
  <Card className={styles.sidebar}>
  <MenuList className = {styles.menu}>
  <NavLink exact to='/' className={styles.link} activeClassName={styles.active}>
  About me
  </NavLink>
  <NavLink to='/todo' className={styles.link} activeClassName={styles.active}>
  Todo
  </NavLink>
  <NavLink to='/contacts' className={styles.link} activeClassName={styles.active}>
  Contacts
  </NavLink>
  </MenuList>
  </Card>
  <Card className={styles.content}>
  <Route path='/' exact component={About} />
  <Route path='/todo' component={Todo} />
  <Route path='/contacts' component={Contacts} />
  </Card>
  </div>
</Router>)

export default App;
