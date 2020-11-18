import react from './react.svg';
import node from './node.svg'
import './deletable.css';

const Deletable = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Image-holder">
            <img src={react} className="react-logo" alt="logo" />
            <img src={node} className="node-logo" alt="logo" />
        </div>       
      </header>
    </div>
  );
}

export default Deletable;
