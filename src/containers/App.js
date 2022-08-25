import './App.css';
import CardList from '../component/CardList/CardList';
import { robots } from '../constants/robots';
import SearchBox from '../component/SearchBox/SearchBox';
import React ,{ Component } from 'react';
// import LifeCycle from './component/LifeCycle/LifeCycle.js';
import Scroll from '../component/Scroll/Scroll';
import ErrorBoundry from '../component/ErrorBoundry/ErrorBoundry';

class App extends Component {

  constructor() {
    super();

    this.state = { 
      'robots': [],
      'searchText': ''
     };
  }

  onSearchChange = (event) => {
    this.setState({robots: robots, searchText: event.target.value});
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(responce =>responce.json())
    .then(users => this.setState({robots: users}));
  }

  render() {
    const {robots, searchText} = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchText);
    })

    return !robots.length ?
        (<div className="tc"><h1>Loading...</h1></div>) 
        : (<div className="tc">
        <h1 className="f2">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
        <CardList robotsArr={filteredRobots}/>
          </ErrorBoundry>
        </Scroll>
        {/* <LifeCycle/> */}
      </div>)
  }
}

export default App;
