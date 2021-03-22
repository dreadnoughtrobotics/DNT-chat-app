import {BrowserRouter, Switch, Route} from 'react-router-dom';
import TestPage from './pages/TestPage/TestPage';

import './App.css';
import LeftBar from './components/leftBar/leftBar.js'
import MessageBar from './components/messageBar/messageBar.js'
import StatusBar from './components/statusBar/statusBar.js'
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path = '/test' exact>
            <TestPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
