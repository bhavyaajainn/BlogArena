import './App.css';
import {statusBar} from './StatusBar';
import {body} from './Body';
import {footer} from './Footer';

function App() {
  return (
    <div className="App">
     <div>{statusBar()}</div>
     <div>{body()}</div>
     <div>{footer()}</div>
    </div>
  );
}

export default App;
