import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Registration from './Pages/Registration/Registration';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login></Login>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Registration></Registration>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
