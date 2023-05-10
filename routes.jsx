import { Route, Routes } from "react-router-dom";
import { Home } from "./src/pages/Home";
import { About } from "./src/pages/About";

//* Aqui é onde declaramos para onde cada uma das rotas irá nos levar *//
const MyRoutes = () => {
  return (
    // Route e Routes são hooks da biblioteca react-router que tem com função fazer o roteamentos e navegação entre as págians//
    <Routes>
      {/* Aqui é onde se cria a rota "/" que leva você para a page Home ou a página inicial */}
      <Route exact path="/" element={<Home />} />
      {/* Aqui é onde se cria a rota "/about" que leva você para a page About */}
      <Route path="/about" element={<About />} />
    </Routes>
  );
};
export { MyRoutes };
