import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Octokit} from '@octokit/rest';

const octokit = new Octokit();

class About extends React.Component {
  state = {
    userName: '',
    avatarUrl: '',
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
        avatarUrl: user.data.avatar_url
      });
    });
  }

  render() {
    const { userName, avatarUrl, isLoading, repoList, errorLoading, errorText } = this.state;
    return (
      <div>
      <h1>{ isLoading ? <CircularProgress color="secondary" /> : 'About me' }</h1>
      {!isLoading &&
        <div>
        {errorLoading ? <p>Error: { errorText } </p> :
        <ol>
        <div>
        <p>User: { userName }</p>
        <img src={avatarUrl} alt='avatar' />
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