import React, {useState} from "react";
import Card from "./Card";
import Loader from "./Loader";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  function getData() {
    document.querySelector(".loader").classList.add("display");
     // setTimeout is implemented only to show that loader is implemented api is not taking time to load.
    setTimeout(() => {   
      fetch("https://reqres.in/api/users?page=1")
      .then(res => res.json())
      .then(data => {
        setItems(data.data);
      })
      document.querySelector(".loader").classList.remove("display");
      setLoading(true);
      }, 5000);
  }

  return (
    <div>
      <nav className="navbar">
        <h1 className="nav-heading">Get Users Info</h1>
        <button className="btn" id="get-data" onClick={getData}>Get Data</button>
      </nav>
      <div className="container" id="display-data">
        {loading ?
          items.map((item, index) => {
            return <Card key={index} avatar={item.avatar} name={item.first_name} email={item.email} />
          }) : <Loader />
        }
      </div>
    </div>
  )
}

export default App;