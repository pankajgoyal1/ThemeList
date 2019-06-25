import React from 'react';
import Header from './Components/Header/Header';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import ThemeList from './Components/ThemeList/ThemeList';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      data:[]
    }
  }
  render(){

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ThemeList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
  }
}

export default App;
