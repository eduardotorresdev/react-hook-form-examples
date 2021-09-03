import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Basic from './pages/Basic';
import ControlledComparison from './pages/ControlledComparison';
import WithTypeScript from './pages/WithTypeScript';
import WithCustomComponent from './pages/WithCustomComponent';
import WithValidation from './pages/WithValidation';
import WithDynamicFields from './pages/WithDynamicFields';

/**
 * @cases
 * Apresentação do hook form
 * Apresentação do hook form vs controlled
 * Apresentação do hook form com typescript
 * Apresentação do hook form com custom component
 * Apresentação do hook form com validação
 * Apresentação do hook form com dynamic fields 
 */
function App() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link className="nav__link" to="/">
              Básico
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/controlled-comparison">
              Componentes controlados
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/with-typescript">
              TypeScript
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/with-custom-component">
              Componentes Custom
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/with-validation">
              Validação
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/with-dynamic-fields">
              Campos dinâmicos
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Basic />
        </Route>
        <Route exact path="/controlled-comparison">
          <ControlledComparison />
        </Route>
        <Route exact path="/with-typescript">
          <WithTypeScript />
        </Route>
        <Route exact path="/with-custom-component">
          <WithCustomComponent />
        </Route>
        <Route exact path="/with-validation">
          <WithValidation />
        </Route>
        <Route exact path="/with-dynamic-fields">
          <WithDynamicFields />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
