function Minus({fruit, setFruit}) {
  if (fruit > 0) {
    setFruit(fruit - 1)
  }
  return fruit
}

export default Minus;