import React from 'react';
import './App.css';
import Search from './search';
import Users from './Users';

class App extends React.Component{

  constructor(props) {
      super(props);

      this.state = {
        users: [],
        search: '',
      }
    }

    componentDidMount() {
        let url = 'https://reqres.in/api/users?page=1&per_page=20';
        fetch(url)
        .then(response => response.json())
        .then(users => this.setState({users: users.data}));
    }

  render() {

    const { search, users} = this.state;
    const filterUsers = users.filter( user => (
      user.first_name.toLowerCase().includes(search.toLowerCase())
    ))

    return (
      <div className="App">
        <Search handleChange={ e => this.setState({search: e.target.value})} />
        <Users users={filterUsers} />
      </div>
    );
  }
}

export default App;
