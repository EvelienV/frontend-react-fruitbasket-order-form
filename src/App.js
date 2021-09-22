import React, {useState} from 'react';
import './App.css';
import Form from "./components/Form/Form";
import Button from "./components/Button/Button";
import Minus from "./components/Minus/Minus";

function App() {
  let [ strawberries, setStrawberries ] = useState(0);
  let [ bananas, setBananas ] = useState(0);
  let [ apples, setApples ] = useState(0);
  let [ kiwis, setKiwis ] = useState(0);

  // function strawBerriesMinus() {
  //   if (strawberries > 0) {
  //     setStrawberries(strawberries - 1)
  //   }
  // }

  function strawBerriesPlus() { setStrawberries(strawberries + 1)}

  function bananasMinus() {
    if (bananas > 0) {
      setBananas(bananas - 1)
    }
  }

  function bananasPlus() { setBananas(bananas + 1)}

  function applesMinus() {
    if (apples > 0) {
      setApples(apples - 1)
    }
  }

  function applesPlus() { setApples(apples + 1)}

  function kiwisMinus() {
    if (kiwis > 0) {
      setKiwis(kiwis - 1)
    }
  }

  function kiwisPlus() { setKiwis(kiwis + 1)}

  function resetCounters() {
    setStrawberries(strawberries = 0)
    setKiwis(kiwis = 0)
    setBananas(bananas=0)
    setApples(apples=0)
  }

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
      <div className="fruitContainer">
        <h2>Aardbeien</h2>
        <button
          type="submit"
          onClick={Minus({strawberries,setStrawberries})}
        >-</button>
        <h2>{strawberries}</h2>
        <button
          type="submit"
          onClick={strawBerriesPlus}
        >+</button>
      </div>

      <div className="fruitContainer">
        <h2>Bananen</h2>
        <button
          type="submit"
          onClick={bananasMinus}
        >-</button>
        <h2>{bananas}</h2>
        <button
          type="submit"
          onClick={bananasPlus}
        >+</button>
      </div>

      <div className="fruitContainer">
        <h2>Appels</h2>
        <button
          type="submit"
          onClick={applesMinus}
        >-</button>
        <h2>{apples}</h2>
        <button
          type="submit"
          onClick={applesPlus}
        >+</button>
      </div>

      <div className="fruitContainer">
        <h2>Kiwis</h2>
        <button
          type="submit"
          onClick={kiwisMinus}
        >-</button>
        <h2>{kiwis}</h2>
        <button
          type="submit"
          onClick={kiwisPlus}
        >+</button>
      </div>
      <Button type="submit" text="Reset" action={resetCounters}>
      </Button>

      <Form></Form>
    </>
  );
}

export default App;
