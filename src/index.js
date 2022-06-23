import React from 'react';
import ReactDOM from 'react-dom';
import LeftPanel from './components/LeftPanel/';
import RightPanel from './components/RightPanel/';
import UserStore from './context/UserStore';
import './index.css';

function App() {
  return (
    <div style={styles.container}>
      <UserStore>
        <LeftPanel />
        <RightPanel />
      </UserStore>
    </div>
  );
}

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    display: 'flex'
  }
};

ReactDOM.render(<App />, document.getElementById('root'));
