import Deletable from './deletable/deletable.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './deletable/deletable.css';

const App = ()=> {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Deletable}/>
      </Router>
    </div>
  );
}

export default App;
