import "./App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { MyRoutes } from "../routes";

//* Aqui é onde declaramos os componentes e dados que serão vizualizados em tela *//
const App = () => {
  return (
    <Router>
      <div>
        {/* "nav" é uma tag de navegação onde você pode ultilizar elementos para criar suas navegações, no caso o "ul" e o "li"*/}
        <nav>
          {/* "ul" é um elemento onde exibiremos o "li" que é uma tag de listagem de intens*/}
          <ul>
            <li>
              {/* Link é o componente que renderiza um outro componente fazendo a navegação para a tela sugerida, no caso a page Home*/}
              <Link to="/">Home</Link>
            </li>
            <li>
              {/* Link é o componente que renderiza um outro componente fazendo a navegação para a tela sugerida, no caso a page About*/}
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        {/* Tag que chama o elemento "MyRoutes" onde ficam localizadas as rotas entre as páginas*/}
        <MyRoutes />
      </div>
    </Router>
  );
};
export default App;
