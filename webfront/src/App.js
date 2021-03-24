import {BrowserRouter, Switch, Route} from 'react-router-dom';
import TestPage from './pages/TestPage/TestPage';
import MainPage from './pages/MainPage/MainPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path = '/test' exact>
            <TestPage />
          </Route>
          <Route path = '/' exact>
            <MainPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
