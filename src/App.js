import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  const product=[
    {name:"iphone", price:"$333"},
    {name:"samsung",price:"$440"},
    {name:"xiaomi",price:"$4040"},
    {name:"Oppo",price:"$44000"},
    {name:"vivo",price:"$100"}
  ]
  
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>     
        <p>this is just for test</p>
      <Jatamata name=" rubel nayok" dream=" marring to bobita"></Jatamata>
      <Jatamata name=" khaled" dream=" solder"></Jatamata>
      <Jatamata name=" sagor" dream=" speaker"></Jatamata>

  <Users></Users>
{
  product.map(element=><Products name={element.name} price={element.price}></Products>)
}

      </header>
    </div>
  );
}

function Products(props) {
  const beautify={
    height:"200px",
    width:"200px",
    backgroundColor:"gray",
    border:'2px solid red',
    margin:"23px"
  }
  return(
    <div style={beautify}>
      <h3>{props.name}</h3>
      <p>Lorem ipsum dolor</p>
      <h5>{props.price}</h5>
    </div>
  )
}
function Users() {
  const [users,setUser]=useState([]);
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data=>setUser(data))
},[])
  return (
    <div>
      <h3>user count:{users.length}</h3>
      <ul>
        {users.map(user=><li>{user.name}</li>)}
      </ul>
    </div>
  )
}


function Counter(){
  const [count, setCount]=useState(2)


  return (
    <div>
      <h2>counted Number:{count}</h2>
      <button onClick={()=>setCount(0)}>Reset</button>
<button onClick={()=>setCount(count+1)}>increase</button>
<button onClick={()=>setCount(count-1)}>decrease</button>
    </div>
  )
}

function Jatamata(tal) {
  
 
  return (
  <div style={{
    border:"1px solid red",
width:"300px",
margin:"23px"


  }}>
  <h3>name:{tal.name}</h3>
  <h5>dream:{tal.dream}</h5>
  </div>
  
  )
  
}
export default App;
