<<<<<<< HEAD
// <<<<<<< HEAD
// import './App.css';
// import NavBar from './Navbar';
// import { BrowserRouter, Route, Routes } from "react-router-dom"

// function App() {
//   return (
//     <div className='App'>
//     <BrowserRouter>
//       <Routes>
//         <Route path= "/" element={<NavBar/>}>
//          </Route>
//       </Routes>
//     </BrowserRouter>
//     </div>
//   );
// }

// function HomePage() {
//   return <div>Homepage</div>;
// }

// function UserPage() {
//   return <div>Profile</div>;
// }

// function LoginPage() {
//   return <div>Login</div>;
// }

// function SignUpPage() {
//   return <div>Sign Up</div>;
// }

// export default App;
// =======
=======
>>>>>>> d0c68d8b401fc9d331a5d140a1bb08ff1ccb2491
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Registration from "./react-register/register";
import NotFound from "./NotFound";
import Login from "./react-login/login";
import RegistrationCard from "./react-profile/RegistrationCard";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  useEffect(() => {
    // Fetch the user email and token from local storage
    const user = JSON.parse(localStorage.getItem("user"));

    // If the token/email does not exist, mark the user as logged out
    if (!user || !user.token) {
      setLoggedIn(false);
      return;
    }

    // If the token exists, verify it with the auth server to see if it is valid
    fetch("http://localhost:3080/verify", {
      method: "POST",
      headers: {
        "jwt-token": user.token,
      },
    })
      .then((r) => r.json())
      .then((r) => {
        setLoggedIn("success" === r.message);
        setEmail(user.email || "");
      });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                email={email}
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
              />
            }
          />
          <Route
            path="/login"
            element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />}
          />
          <Route path="/register" element={<Registration />} />
          <Route path="/user" element={<RegistrationCard />} />
          <Route element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
<<<<<<< HEAD
// >>>>>>> abdc546ec4528167dda96a5180010bc48da81617
=======
>>>>>>> d0c68d8b401fc9d331a5d140a1bb08ff1ccb2491
