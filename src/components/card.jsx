// import { Image } from "src/img/cat.jpg";

export function Card({ title, text, imgurl }) {
  //const {title, text} = props; destructuring
  // let dynamicClassName = "card-container";
  // if (isFavorite) {
  //   dynamicClassName = dynamicClassName + "highlight";
  // }
  return (
    //style as an objesct
    <div className="card">
      {/* dynamicClassName */}
      {/* <Image src={imgurl} /> */}
      <img src={imgurl} height="200px" alt="" />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
