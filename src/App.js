
import './App.css';
import TopBar from './components/topbar/topbar';
import Home from './pages/home/home';
import Single from './pages/single/single';
import Write from './pages/write/write';
import Login from './pages/Login/login';
import Register from './pages/Register/register';
import Settings from './pages/settings/settings';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  
  return (
<Router>
   <TopBar/>
   <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route path="/single">
      <Single/>
    </Route>
    <Route path="/write" >
      <Write/>
      </Route>
      
    <Route path="/login">
      <Login/>
    </Route>
    <Route path="/register">
      <Register/>
    </Route>
    <Route path="/settings">
      <Settings/>
    </Route>

   </Switch>
    
    
</Router>
  );
  
  
}

export default App;
