import "./App.css";

import Navbar from "./components/navbar";
import Card from "./components/card";
import datas from "./components/datas";
function App() {
  const card = datas.map((card) => (
    <Card
      img={card.img}
      text={card.text}
      date={card.date}
      land={card.land}
      title={card.title}
    ></Card>
  ));
  return (
    <div className="App">
      <Navbar></Navbar>
      {card}
    </div>
  );
}

export default App;
