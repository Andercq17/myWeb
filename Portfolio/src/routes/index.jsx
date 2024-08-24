import About from '../components/pages/About';
import Contact from '../components/pages/Contact';
import Notfound from '../components/pages/Notfound';
import Portfolio from '../components/pages/Portfolio';
import Home from '../components/pages/Home';
import Cv from '../components/pages/Cv';

export const routes = [
  { path: '/', element: <Home />},
  { path: '/about', element: <About /> },
  { path: '/portfolio', element: <Portfolio /> },
  { path: '/curriculum', element: <Cv /> },
  { path: '/contact', element: <Contact /> },
  { path: '*', element: <Notfound /> },
];
