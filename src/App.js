
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Destination from './Destination';
import Mars from './Mars';
import Moon from './Moon';
import Europa from './Europa'
import Titan from './Titan'
import Crew from './Crew';
import Technology from './Technology';
import Vehicle from './Vehicle'
import Spaceport from './Spaceport'
import Capsule from './Capsule'



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path ='/'><Home/></Route>
          <Route path = '/Destination'><Destination/></Route>
          <Route path = '/moon' ><Moon/></Route>
          <Route path = '/mars'><Mars/></Route>
          <Route path = '/Europa'><Europa/></Route>
          <Route path = '/Titan'><Titan/></Route>
          <Route path = '/Crew'>
            <Crew/>
          </Route>
          <Route path = '/Vehicle'><Vehicle/></Route>
          <Route path = '/Spaceport'><Spaceport/></Route>
          <Route path = '/Capsule'><Capsule/></Route>
          <Route path = '/Technology'>
            <Technology/>
          </Route>
        </Switch>
      </Router>
      



    </div>
  );
}

export default App;
