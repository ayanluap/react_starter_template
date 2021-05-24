import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/components/Navbar';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <ScrollToTop></ScrollToTop>
      </Switch>
    </Router>
  );
};

export default App;
