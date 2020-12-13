import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Octokit} from '@octokit/rest';
import styles from './About.module.css';

const octokit = new Octokit();

class About extends React.Component {
  state = {
    userName: '',
    avatarUrl: '',
    userBio: '',
    isLoading: true,
    repoList: [],
    errorLoading: false,
    errorText: ''
  }

  componentDidMount() {
    octokit.repos.listForUser({
      username: 'malyshevmaxim'
    }).then(({ data }) => {
      this.setState({
        repoList: data,
        isLoading: false
      });
    })

    .catch(error => (this.setState({
      isLoading: false,
      errorLoading: true,
      errorText: error.name
    })));

    octokit.users.getByUsername({
      username: 'malyshevmaxim'
    }).then((user) => {
      this.setState({
        userName: user.data.login,
        avatarUrl: user.data.avatar_url,
        userBio: user.data.bio
      });
    });
  }

  render() {
    const { userName, avatarUrl, userBio, isLoading, repoList, errorLoading, errorText } = this.state;
    return (
      <div className={styles.wrap}>
      <h1 className={styles.title}>{ isLoading ? <CircularProgress color="secondary" /> : 'Malyshev Maxim' }</h1>
      <div className={styles.img}>
      <img className={styles.avatar} src={avatarUrl} alt='avatar' />
      </div>
      {!isLoading &&
        <div>
        {errorLoading ? <p>Error: { errorText } </p> :
        <ol className={styles.ol}>
        <div>
        <p className={styles.text}>My profile on GitHub <a className={styles.link} href="https://github.com/malyshevmaxim">{ userName }</a></p>
        <p className={styles.text}>{userBio}</p>
        </div>
        <div>
        <h2 className={styles.title}>My projects</h2>
        <p className={styles.text}>Responsive layout of one-page sites (HTML, CSS):</p>
        <p><a className={styles.link} href="https://malyshevmaxim.github.io/Tesla/">Tesla</a></p>
        <p><a className={styles.link} href="https://malyshevmaxim.github.io/App.creation/">App.creation</a></p>
        <p><a className={styles.link} href="https://malyshevmaxim.github.io/Digital-meeting-day/">Digital meeting day</a></p>
        <p className={styles.text}>Card game (JavaScript):</p>
        <p><a className={styles.link} href="https://malyshevmaxim.github.io/Find-a-bug/">"Find a bug"</a></p>
        </div>
        <h2 className={styles.title}>My repositories</h2>
        {repoList.map(repo =>(<li key={repo.id}>
          <a className={styles.link} href={repo.html_url}>{repo.name}</a>
          <p className={styles.text}>{repo.description}</p>
          <p className={styles.text}>{repo.language}</p>
          </li>))}
        </ol>}
        <div>
        <p className={styles.mark}>Created in WebHeroSchool</p>
        </div>
        </div>
      }
      </div>
    );
  }
}

export default About;