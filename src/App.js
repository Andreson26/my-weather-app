
import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from './pages/Home/home';
import SideBar from './components/SideBar/sideBar';
import City from './pages/City/city'
import './App.css';

function App() {
 
    return (
      <div className="App">
        <Router>
          
          <SideBar />
          <Switch>
            <Route exact path='/' component={Home} />
      
            <Route path="/:cityId" component={City} />
          </Switch>
        
        </Router>
      </div>
       
     
    );
  
 
}

export default App;
