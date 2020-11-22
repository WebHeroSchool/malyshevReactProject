import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';
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
            <MenuList>
              <Link to='/' className={styles.link}><MenuItem>About me</MenuItem></Link>
              <Link to='/todo' className={styles.link}><MenuItem>Todo</MenuItem></Link>
              <Link to='/contacts' className={styles.link}><MenuItem>Contacts</MenuItem></Link>
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
