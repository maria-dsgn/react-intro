import { useState } from "react";
import "./App.css";
//import { Card } from "./components/card";

function App() {
  const [LanguageSwitch, setLanguage] = useState("en");
  //const [logged, setLogin] = useState(true);
  const [isLoggedIn, setisLoggedIn] = useState(true);

  //function that changes value of LogIn/LogOut btn
  const handleInOut = () => {
    setisLoggedIn(!isLoggedIn);
  };

  const [isLiked, setisLiked] = useState(false);
  //function that changes value of Like/Unlike btn
  const handleLike = () => {
    setisLiked(!isLiked);
  };

  let message = "React";
  if (LanguageSwitch === "en" && isLoggedIn) {
    message = <p>Welcome to your profile page, Ralf.</p>;
  } else if (LanguageSwitch === "de" && isLoggedIn) {
    message = <p>Willkommen auf Deiner Profile-Seite, Ralf.</p>;
  } else if (LanguageSwitch === "en" && isLoggedIn === false) {
    message = (
      <p>
        Welcome to React State website, stranger. Log in to see state in action
      </p>
    );
  } else {
    message = (
      <p>Willkommen auf React State-Seite. Log in um State zu sehen!</p>
    );
  }

  return (
    <>
      <nav className="nav-container">
        <p className="nav-text">Hier is nav text</p>
        {/* the value changes with LogIn/LogOut btn value (true/false) change */}
        {/* question: how we do it for more complex changes, like style of a whole nav on click */}
        <span className="profile-icon"> {isLoggedIn ? "🐨" : "🐸"}</span>
        {/* LogIn/LogOut btn that use callback?? func that changes value of this btn(true/false) */}
        <button className="nav-btn" onClick={handleInOut}>
          {/* change label if true (log in rn) -> need to log out */}
          {isLoggedIn ? "Log Out" : "Log In"}
        </button>
      </nav>

      <h2>React State Exercise</h2>

      <div className="btn-container">
        <button
          onClick={() => {
            setLanguage("en");
          }}
        >
          Switch to English
        </button>
        <button
          onClick={() => {
            setLanguage("de");
          }}
        >
          Umschalten auf Deutsch
        </button>
      </div>

      <p className="message-box">{message}</p>
      {/* the changes is not visible if changes made not in DOM */}
      {/* we use react state for this */}
      <footer className="footer-container">
        <p className="footer-text">Hier is footer text</p>
        <button className="footer-btn" onClick={handleLike}>
          {/* change label if true (log in rn) -> need to log out */}
          {isLiked ? " 🩶 Unliked " : "Liked ❤️"}
        </button>
      </footer>
    </>
  );
}

export default App;

// let count = 0;
//const [count, setCount] = useState(0); //destructuring
//   const [state, setState] = useState(initialState)
// set functions, like setSomething(nextState)
//const while you should not change variable ??outside of State //[normal variable, ] = (undefined or watewer u put there will be associated variable with)
// {/* <div className="card-container">
//     <Card
//       title="Mr Doe"
//       text="Lorem ipsum description"
//       imgurl="src/img/cat.jpg"
//       isFavorite={true}
//     />

//     <Card
//       title="Ms Doe"
//       text="Lorem ipsum description"
//       imgurl="src/img/cat.jpg"
//       isFavorite={false}
//     />
//   </div> */}

// {/* callback function needed, we need event on click */}

//  <button
//       onClick={() => {
//         setCount(count + 1); /** asynchron in consol starts 0, user view 1 */
//       }}
//     >
//       count is {count}
//     </button>

// {/* <div className="btn-container">
//       <button
//         onClick={() => {
//           setLogin(true);
//         }}
//       >
//         Log in as Ralf
//       </button>
//       <button
//         onClick={() => {
//           setLogin(false);
//         }}
//       >
//         Log out
//       </button>
//     </div> */}
