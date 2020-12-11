import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Octokit} from '@octokit/rest';

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
      <div>
      <img src={avatarUrl} alt='avatar' />
      <h1>{ isLoading ? <CircularProgress color="secondary" /> : 'Malyshev Maxim' }</h1>
      {!isLoading &&
        <div>
        {errorLoading ? <p>Error: { errorText } </p> :
        <ol>
        <div>
        <p>My profile on GitHub <a href="https://github.com/malyshevmaxim">{ userName }</a></p>
        <p>{userBio}</p>
        </div>
        <div>
        <h2>My projects</h2>
        <p>Responsive layout of one-page sites (HTML, CSS):</p>
        <p><a href="https://malyshevmaxim.github.io/Tesla/">Tesla</a></p>
        <p><a href="https://malyshevmaxim.github.io/App.creation/">App.creation</a></p>
        <p><a href="https://malyshevmaxim.github.io/Digital-meeting-day/">Digital meeting day</a></p>
        <p>Card game (JavaScript):</p>
        <p><a href="https://malyshevmaxim.github.io/Find-a-bug/">"Find a bug"</a></p>
        </div>
        <h2>My repositories</h2>
        {repoList.map(repo =>(<li key={repo.id}>
          <a href={repo.html_url}>{repo.name}</a>
          </li>))}
        </ol>}
        </div>
      }
      </div>
    );
  }
}

export default About;