import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useHistory } from 'react-router-dom';

import Input from "./components/input";
import Profile from "./components/profile";
import Banner from "./components/banner";
import Chat from "./chat";

import "./styles/app.css";

const Homepage = () => {
  const [user, SetUser] = useState("UlissesJunior");
  const history = useHistory();

  function handleinput(event) {
    console.log(event.target.value);
    const InputValue = event.target.value;
    SetUser(InputValue);
    console.log(InputValue);
  }

  const [Github, setGithub] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then((data) => setGithub(data));
  }, [user]);

  const handleClick = () => {
    // e.preventDefault();
    history.push("/chat/");
    history.push("/chat/");
    history.goBack();
  }

  return (
    <Router>
      <Switch>
        <Route path="/ImersaoReact/" exact render={() => (
            <div className="container">
              <div className="grid">
                <Input
                  Github={Github}
                  user={user}
                  handleinput={handleinput}
                  handleClick={handleClick}
                />
                <Profile Github={Github} />
              </div>
              <Banner />
            </div>
          )}
        />
        <Route path="/chat/" exact render={() => (
          <Chat Github={Github}/>
        )} />
      </Switch>
    </Router>
  );
};

export default Homepage;
