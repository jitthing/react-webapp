const fundWords = ["Fundamental", "Core", "Crucial"];
import reactImg from "../assets/react-core-concepts.png";

const genRandomInt = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

export default function Header() {
  return (
    <div>
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {fundWords[genRandomInt(2)]} React concepts you will need for almost
          any app you are going to build!
        </p>
      </header>
    </div>
  );
}
