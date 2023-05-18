import "./App.css";
import NavigationBar from './components/TopBar';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from './components/About';
import Contact from "./components/Contact";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import Register from "./screens/Register";
import Login from "./screens/Login";
import AdminScreen from "./screens/AdminScreen";
import useWebSocket from 'react-use-websocket';

const WS_URL = 'ws://127.0.0.1:8000';

function App() {
  useWebSocket(WS_URL, {
    onOpen: () => {
      console.log('WebSocket connection established.');
    },
    share: true,
    filter: () => false,
    retryOnError: true,
    shouldReconnect: () => true
  });

  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route path="/about" exact component={About}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/cart" exact component={CartScreen}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/admin" component={AdminScreen}/>
        <Route path="/" exact component={HomeScreen}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
