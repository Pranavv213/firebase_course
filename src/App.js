import logo from './logo.svg';
import './App.css';
import Fireauth from './Fireauth'
import Firestorage from './Firestorage'
import GetData from './GetData'
import Firebase1 from './Firebase1'
import Firelogin from './Firelogin'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Firebase1}/>
          <Route exact path="/getdata" component={GetData}/>
          <Route exact path="/url" component={Firestorage}/>
          <Route exact path="/login" component={Firelogin}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
