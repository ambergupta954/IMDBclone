import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Movies from './components/Movies/Movies';
import Actors from './components/Actors/Actors';
import AboutActor from './components/Actors/AboutActor';
import AboutMovie from './components/Movies/AboutMovie'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {

 
 
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Movies" exact component={Movies}/>
          <Route path="/Actors" exact component={Actors}/>
          <Route path="/actors/:id" component={AboutActor} />
          <Route path="/movies/:id" component={AboutMovie} />
        </Switch>
      </div>
    </Router>
  )
  


 function Home() {
  return (
    <div>
      <h3>Home</h3>
    </div>
  )
}



}
export default App;
