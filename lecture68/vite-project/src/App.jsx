import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);

  //first -> side-effect function
  //second -> clean-up function
  //third -> comma separated dep list

  //variation:1
  //runs on every render
  // useEffect(() => {
  //   alert("I will run on each render")
  // })

  //variation: 2
  //that runs only first render
  // useEffect(() => {
  //   alert("I will run on only 1st render")
  // }, [])

  // variation:3
  // useEffect(() => {
  //   alert("I will run every time when count is updated")
  // }, [count])

  //variation: 4
  //multiple dependencies
  // useEffect(() => {
  //   alert("I will run every time when count is updated")
  // }, [count, total])

  //variation: 5
  //iss baar let's add a cleanup function
  useEffect(() => {
    alert("Count is updated")
    return () => {
      alert("Count is unmounted from UI");
    }
  }, [count])


  function handleClick() {
    setCount(count+1);
  }
  function handleClickTotal() {
    setTotal(total+1);
  }

  return (
    <div>
      <button onClick={handleClickTotal}>
        Update Count
      </button>
      <br/>
      Count is: {count}

      <br />
      <button onClick={handleClickTotal}>
        Update Total
      </button>
      <br />
      Total is: {total}
    </div>
  )
}

export default App
