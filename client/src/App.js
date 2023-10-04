import './App.css';
import NavBar from './Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={<NavBar/>}>
         </Route>
      </Routes>
    </BrowserRouter>
    </div>
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

function SignUpPage() {
  return <div>Register</div>;
}

export default App;