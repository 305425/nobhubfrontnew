
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/css/main.css';
import Home from './Home';
import Login from './dashboard/Login'
import Ourteam from './Ourteam/Ourteam';
import Services from './services/services';
import Pricing from './pricing/pricing';


function App() {
 return(
  <Router>
  {/* <ScrollToTop /> */}

  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/team' component={Ourteam} />
    <Route exact path='/service' component={Services}/>
    <Route exact path='/pricing' component={Pricing}/>
  </Switch>
</Router>
 ) 
}

export default App;