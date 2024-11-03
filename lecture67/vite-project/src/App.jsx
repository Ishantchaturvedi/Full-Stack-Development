
import './App.css'

function App() {

  function handleClick() {
    alert("I am Clicked");
  }

  function handleMouseOver() {
    alert("You are on para with Mouse")
  }

  function handleInputChange(e) {
    // console.log("Change value in input");
    console.log("Value till Now: ", e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    //I am writing my custon behaviour down
    alert("Can I submit the form");
  }

  return (
  <div>

    <button onClick={() => alert("Button Click")}>
      Click me
    </button>

    {/* <form onSubmit={handleSubmit}>
      <input type='text' onChange={handleInputChange}/>
      <button type='submit'>submit</button>
    </form> */}

    {/* <p onMouseOver={handleMouseOver} style={{border:"1px solid black"}}>
      I am a para
    </p>
    <button onClick={handleClick}>
      Click me
    </button> */}
  </div>
  )
}

export default App
