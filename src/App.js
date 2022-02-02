import logo from './logo.svg';
import './App.css';
import Fireauth from './Fireauth'
import Firestorage from './Firestorage'
import GetData from './GetData'
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
          <Route exact path="/" component={Fireauth}/>
          <Route exact path="/getdata" component={GetData}/>
          <Route exact path="/url" component={Firestorage}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
