import React, { Component, createContext } from 'react';
import { saveState, loadState } from '../helpers/storage';

const UserContext = createContext(null);

export const withUserContext = Component => {
  return props => {
    return <UserContext.Consumer>{context => <Component {...props} context={context} />}</UserContext.Consumer>;
  };
};

class UserStore extends Component {
  state = {
    users: loadState('users') || []
  };

  addNewUser = (user, reset) => {
    this.setState(prevState => {
      const users = [user, ...prevState.users];
      saveState('users', users);
      return { users };
    }, reset);
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          users: this.state.users,
          addNewUser: this.addNewUser
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserStore;
