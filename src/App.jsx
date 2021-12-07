import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TodosPage from './pages/TodosPage';
import AboutPage from './pages/AboutPage';
import Layout from './components/Layout/Layout';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='todos' element={<TodosPage />} />
          <Route path='about' element={<AboutPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
