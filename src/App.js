import './App.css';
import {
  Switch,
  Route,
  Router
} from 'react-router-dom';
import history from './history.jsx';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Home from './Home'
import Page2 from './Tough'
import Page3 from './Love'

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Permanent Marker',
      'cursive',
    ].join(','),
  },});

  

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Tough' component={Page2} />  
          <Route exact path='/Love' component={Page3} />          
                 
        </Switch>
      </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;
