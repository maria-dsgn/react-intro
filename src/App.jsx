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

  const [isLiked, setisLiked] = useState(true);
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

  // create a new state variable that holds the color value
  const [color, setColor] = useState("#ffffff");
  // appropriate type your state needs to have hex code, default color

  const changeColor = (event) => {
    setColor(event.target.value);
  };

  const [isVisible, setIsVisible] = useState(false);

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
      {/* password segment */}
      <div className="password-container">
        <label htmlFor="password">Enter password:</label>
        <input
          className="password-box"
          id="password"
          type={isVisible === true ? "text" : "password"}
        />
        <span
          className="visibility-icon"
          onClick={() => setIsVisible(isVisible ? false : true)}
        >
          {isVisible ? "🙈" : "👀"}
        </span>
        {/* also correct, compact version <span onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "👀" : "🐸"}{" "}
      </span> */}{" "}
      </div>
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
      {/* color pick */}
      <div
        className="color-container"
        // style={{
        //   // boxShadow: "0px 0px 10px 4px ${color}",
        //   border: "11px solid ${color}",
        // }}
      >
        <div
          className="color-box"
          style={{
            backgroundColor: color,
          }}
        ></div>

        {/* create an input element in your JSX and use type="color" */}
        <div>
          <label htmlFor="colorPicker">
            Pick a color:
            <br />
          </label>
          <input
            type="color"
            value={color}
            id="colorPicker"
            onChange={changeColor}
          />
          <p>{color}</p>
        </div>
      </div>
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
