import { useState } from "react"
import { v4 as uuidv4 } from "uuid";
import "./Money.css"
function Cc() {

    const [transaction,setTransaction]=useState([])
    const [title,setTitle]=useState("")
    const [amount,setAmount]=useState("")
    const[income,setIncome]=useState(0)
    const[expansive,setExpansive]= useState(0)
    const [type,setType]=useState(1)
    const[balance,setBalance]=useState(0)

    const addElement=(e)=>{
     e.preventDefault()
     const Element={
        id:uuidv4(),
        title:title,
        amount:amount,
        type:type
     }
    setTransaction(prev => [...prev, Element])
     
        
   if (type === 1) {
  setIncome((prev) => prev + Number(amount));
  setBalance((prev) => prev + Number(amount));
} else {
  setExpansive((prev) => prev + Number(amount));
  setBalance((prev) => prev - Number(amount));
}
     setAmount(0)
     setTitle("")
     setTitle("")
    } 
const onDelete = (id) => {
  
  setTransaction(prev => prev.filter(item => item.id !== id));
};

  return (
    <>
    <div  className="container">
    
        <h2>Hi,Richard</h2>
        <p>Welcome back to your<span className="highlight"> Money Manager</span></p>
        <span></span>

        
      <div className="top-container">
        <div  className="box balance">
          <p>Your Balance</p>
          <h3>{balance}</h3>{""}
        </div>
         <div   className="box income">
          <p>Your income</p>
          <h4>{income}</h4>{ ""}
        </div>
         <div className="box expense">
          <p>Your Expenses</p>
          <h5>{expansive}</h5>{" "}
        </div>

      </div>
      <div className="appp">
        <div className="form-container">
        <h1>Add Transaction</h1>
        <form  onSubmit={addElement}>
          <h4>Title</h4>
          <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
           <h4>Amount</h4>
          <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}></input>
          <br></br>
          <label>Type</label>
          <select value={type} onChange={(e)=>setType(e.target.value)}>
            <option value="income">Income</option>
            <option value="expansive">Expensive</option>
          </select>
          {/* <button onClick={(e)=>(setTransaction(e.target.value))}>Add</button> */}
          <button type="submit">Add</button>
          
        </form>
      </div>
      <div className="hh">
        <h1>History</h1>
      {transaction.map(item => (
  <div className="delete" key={item.id}>
    <h4>{item.title}</h4>
    <p>Amount: {item.amount}</p>
    <p>Type: {item.type}</p>
     <button onClick={() => onDelete(item.id)}>
      Delete
    </button>
      </div>
      
))}
  </div>

      </div>
      
    </div>
    </>
  )

}

export default Cc
