import './App.css';
import Bootstrap from './Bootstrap';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import About from './components/Body/About';
import Service from './components/Body/Service';
import Portfolio from './components/Body/Portfolio';
import Contact from './components/Body/Contact';
import {AnimatePresence,motion} from 'framer-motion'

function App() {
  return (
    <motion.div className="App"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
      <Bootstrap />
      <Router>
      <AnimatePresence>
      <Switch>
      <Route path="/" exact component={Header}/>
      <Route path="/Header" component={Header}/>
      <Route path="/About" component={About}/>
      <Route path="/Service" component={Service}/>
      <Route path="/Portfolio" component={Portfolio}/>
      <Route path="/Contact" component={Contact}/>
      <Route path="/Footer" component={Footer}/>
      </Switch>
      </AnimatePresence>
      </Router>
    </motion.div>
  );
}

export default App;