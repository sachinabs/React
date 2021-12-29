import "./App.css";

import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

function App() {
  const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated , getAccessTokenSilently} =
    useAuth0();



  function callingApi() {
    axios
      .get("http://localhost:5000/")
      .then((response) => console.log(response.data)
      );
  }
  async function callingProtectedApi() {
  
   try {
    const token = await getAccessTokenSilently()
    console.log(token);

    const response = await axios.get("http://localhost:5000/protected",{
      headers: {
        authorization:`Bearer ${token}`
      }
    });

console.log(response.data);
   } catch (error) {
     console.log(error);
   }
  }

  return (
    <div className="App">
      <h1>Shop application </h1>
      <a href="http://localhost:5000/protected"> Test here after logout </a>
      <ul>
        {/* <li>  <button onClick={loginWithPopup}> Login with Popup </button>  </li> */}

        {isAuthenticated ? (
          <li>
            {" "}
            <button onClick={logout}> Logout </button>{" "}
          </li>
        ) : (
          <li>
            {" "}
            <button onClick={loginWithRedirect}> Login </button>{" "}
          </li>
        )}
      </ul>

      <h4>User is {isAuthenticated ? "Logged in " : "Not logged in"}</h4>

      {isAuthenticated && <pre>{JSON.stringify(user, null, 2)}</pre>}

          {/* redirect to route */}

          {isAuthenticated ? <ul>
            <li><button onClick={callingApi}>about</button></li>
            <li><button onClick={callingProtectedApi}>profile</button></li>
          </ul>: " "}
          

    </div>
  );
}

export default App;
