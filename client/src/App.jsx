import './App.scss';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage'
import WelcomePage from './pages/WelcomePage/WelcomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import Categories from './pages/Categories/Categories';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/welcome" exact element={<WelcomePage />} />
          <Route path="/register" exact element={<RegisterPage />} />
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/" exact element={<HomePage />} />
          <Route path="*" exact element={<ErrorPage />} />
          <Route path="/moviedetail" exact element={<MovieDetails />} />
          <Route path="/categories" exact element={<Categories />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
