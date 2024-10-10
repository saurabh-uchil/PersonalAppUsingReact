import './App.css';
import Completed from './Components/Completed';
import Header from './Components/Header';
import Link from './Components/Link';
import Navbar from './Components/Navbar';
import Route from './Components/Route';
import ToDoList from './Components/TodoList';

function App() {
  return (
  <>
    <Header></Header>
    
    <Navbar></Navbar>

    <Route to="/">
      <ToDoList />
    </Route>

    <Route to="/Completed" >
      <Completed />
    </Route>
  </>
  );
}

export default App;
