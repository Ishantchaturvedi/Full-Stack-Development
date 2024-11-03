import UserCard from "./components/UserCard"
import Ishantpic from "./assets/Ishantpic.jpg"
import Maharana from "./assets/maharana.jpg"
import PrithviRaj from "./assets/prithviraj.jpg"




function App() {

  return (
    <div className="container">
      <UserCard name="Ishant Chaturvedi" desc="desc1" image={Ishantpic} style={{"border-radius":"10px"}}/>
      <UserCard name="Maharana Pratap" desc="desc2" image={Maharana} style={{"border-radius":"10px"}}/>
      <UserCard name="PrithviRaj Chauhan" desc="desc3" image={PrithviRaj} style={{"border-radius":"10px"}}/>
    </div>
  )
}

export default App
