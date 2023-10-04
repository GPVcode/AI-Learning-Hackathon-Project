import logo from './logo.svg';
import './App.css';
import NavBar from './Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/user" component={UserPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          {/* Add more routes for other pages */}
        </Switch>
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