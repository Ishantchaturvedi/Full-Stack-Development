
import './App.css'
import Card from './components/Card';

function App() {
  //create state
  //manage state
  //change state
  const [name, setName] = useState('');

  return (
    <div>
      <Card name={name} setName={setName}/>
      {/* <p>I am inside Parent Component and Value of name is {name}</p> */}
    </div>
  )
}

export default App
