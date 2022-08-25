import './App.css';
import CardList from '../component/CardList/CardList';
// import { robots } from '../constants/robots';
import SearchBox from '../component/SearchBox/SearchBox';
import React ,{ useState, useEffect } from 'react';
// import LifeCycle from './component/LifeCycle/LifeCycle.js';
import Scroll from '../component/Scroll/Scroll';
import ErrorBoundry from '../component/ErrorBoundry/ErrorBoundry';

function App() {

  const [robots, setRobots] = useState([]);
  const [searchText, setSearchText] = useState('');

  const onSearchChange = (event) => {
   setSearchText(event.target.value);
  }

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(responce =>responce.json())
    .then(users => setRobots(users));
  }, []);
   
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchText);
    })

    return !robots.length ?
        (<div className="tc"><h1>Loading...</h1></div>) 
        : (<div className="tc">
        <h1 className="f2">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
        <CardList robotsArr={filteredRobots}/>
          </ErrorBoundry>
        </Scroll>
        {/* <LifeCycle/> */}
      </div>)
}

export default App;
