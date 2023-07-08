import logo from './logo.svg';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Counter from './components/01-state/state';
import Counter2 from './components/02-counter/counter';
import Formulaire from './components/04-form';
import DoList from './components/05-toDoList/dolist';
import Header from './components/06-nav-link-router/header';
import NotFound from './components/08-notFound';
import Cycle from './components/09-class-props-state-cycle/cycle';
import ClassParent from './components/09-class-props-state-cycle/class';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Header/>}>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/counter2" element={<Counter2/>}/>
        <Route path="/formulaire" element={<Formulaire/>}/>
        <Route path="/dolist" element={<DoList/>}/>
        <Route path="/cycle" element={<Cycle/>}/>
        <Route path="/classparent" element={<ClassParent/>}/>
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
  );
}



export default App;
