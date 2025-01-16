import { useState } from "react";
function App() {
 
  const [test,setTest] =useState()
  const handleChange = (e) => {
      setTest(e.target.value)
  }
  return (
    <div style={{padding :32}}>
       <input type={test} value={test} onChange={handleChange}/>
       <p>{test}</p>
    </div>
  );
}

export default App;
