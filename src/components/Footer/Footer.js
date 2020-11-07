import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styles from './Footer.module.css';
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

const Footer = ({ count }) => (<div className={styles.footer}>
  <div className={styles.count}>
  {count} items left
  </div>
  <div>
  <Breadcrumbs aria-label="breadcrumb">
  <Link color="inherit" href="/">
  Completed
  </Link>
  <Link color="inherit" href="/getting-started/installation/">
  Active
  </Link>
  <Typography color="textPrimary">
  All
  </Typography>
  </Breadcrumbs>
  </div>
  <div className={styles.wraper}>
  <a className={styles.button} href="">Clear completed</a>
  </div>
  </div>)

export default Footer;