import React from "react";
import Navbar from "../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const { loggedIn, email } = props;
  const navigate = useNavigate();

  const onButtonClick = () => {
    if (loggedIn) {
      localStorage.removeItem("user");
      props.setLoggedIn(false);
    } else {
      navigate("/login");
    }
  };
  const onButtonClick2 = () => {
    navigate("/register");
  };

  return (
    <div className="mainContainer">
      <div className="col-md-2 side-bar">
        <Navbar />
      </div>
      <div className={"titleContainer"}>
        <div>Welcome!</div>
      </div>
      <div>This is the home page.</div>
      <div className={"buttonContainer"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={onButtonClick}
          value={loggedIn ? "Log out" : "Log in"}
        />
        {loggedIn ? <div>Your email address is {email}</div> : <div />}

        <input
          className={"inputButton"}
          type="button"
          onClick={onButtonClick2}
          value="Register"
        />
      </div>
    </div>
  );
};

export default Home;
