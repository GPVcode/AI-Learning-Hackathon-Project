import './App.css';
import NavBar from './Navbar';
import { BrowserRouter as Route, Router, Routes, Link } from "react-router-dom"

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route>
          <Route path="/" exact component={home} />
          <Route path="/user" component={user} />
          <Route path="/login" component={login} />
          <Route path="/register" component={register} />
        </Route>
      </div>
    </Router>
  );
}

function HomePage() {
  return <div>Homepage</div>;
}

function UserPage() {
  return <div>User</div>;
}

function LoginPage() {
  return <div>Login</div>;
}

function RegisterPage() {
  return <div>Register</div>;
}

export default App;