
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { NavBar, Footer } from './components';
import { Home, Insumos } from './pages';
import { GlobalStyle } from './GlobalStyles';

export const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/insumos' element={ <Insumos />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
