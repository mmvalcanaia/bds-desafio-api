import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Search from 'pages/Search';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

const Routes = () => {
  return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </BrowserRouter>
  );
};

export default Routes;
