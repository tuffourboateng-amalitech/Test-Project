import React, { Component } from 'react';
import { UserCardContainer, UserIcon, UserInfo, AllCardsContainer } from './styles';
import { withUserContext } from '../../context/UserStore';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

function formatDate(dob) {
  if (!dob) return 'Nil';
  const date = new Date(dob);
  const day = formatDay(date.getDate());
  const month = MONTHS[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

function formatDay(day) {
  if (day >= 10 && day <= 20) {
    return `${day}th`;
  }

  switch (day % 10) {
    case 1:
      return `${day}st`;
    case 2:
      return `${day}nd`;
    case 3:
      return `${day}rd`;
    default:
      return `${day}th`;
  }
}

function getInitials(firstName, lastName) {
  return firstName[0] + lastName[0];
}

class RightPanel extends Component {
  render() {
    const { users } = this.props.context;
    return (
      <div style={styles.container}>
        <h1 style={styles.header}>User List</h1>
        <AllCardsContainer>
          {users.map((user, id) => {
            const { firstName, lastName, middleName, dob, address } = user;
            return (
              <UserCardContainer key={id}>
                <UserIcon>{getInitials(firstName, lastName)}</UserIcon>
                <UserInfo>
                  <h4>{`${firstName} ${middleName == null ? '' : middleName} ${lastName}`}</h4>
                  <p>ADDRESS: {address == null ? 'Nil' : address}</p>
                  <p>DOB: {formatDate(dob)}</p>
                </UserInfo>
              </UserCardContainer>
            );
          })}
        </AllCardsContainer>
      </div>
    );
  }
}

const styles = {
  container: {
    width: '50vw',
    height: '100vh',
    backgroundColor: '#F9F9F9',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  header: {
    marginTop: 100,
    marginBottom: 50
  }
};

export default withUserContext(RightPanel);
