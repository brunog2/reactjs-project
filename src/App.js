import React from 'react';
import Header from './components/Header';
import './styles.css';
import Main from './pages/main';
import Routes from './routes';

class App extends React.Component{
  render(){
    return(      
      <div>
        <Header />
        <Routes />
      </div>
    );
  }
}
export default App;