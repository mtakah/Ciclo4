import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './views/Home';
import { Listar } from './views/Cliente/Listar';
// import { Listar } from './views/Pedido/Listar';
// import { Listar } from './views/Servico/Listar';
import { Menu } from './components/Menu';

function App() {
  return (
    <div>
      <Router>
        <Menu/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/listar-cliente" component={Listar}/>
          {/* <Route path="/listar-pedido" component={Listar}/>
          <Route path="/listar-servico" component={Listar}/> */}
        </Switch>
      </Router>

    </div>
  );
}

export default App;
