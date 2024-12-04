// React UseState and state management 

// import React, { useState } from "react";

// export default function Page() {
//   const [marks, setMarks] = useState(5);

//   const addValue = () => {
//     if (marks < 10) {
//       setMarks(marks + 1);
//     }
//   };

//   const removeValue = () => {
//     if (marks > 0) {
//       setMarks(marks - 1);
//     }
//   };

//   return (
//     <>
//       <h1>My marks are {marks}</h1>
//       <button onClick={addValue}>Add</button>
//       <button onClick={removeValue}>Remove</button>
//     </>
//   );
// }


import React, { useState } from 'react'
import Navbar from "./Components/Navbar"
import Footer from './Components/Footer'
import Button from './Components/Button'
import HelloMessage from './Components/HelloMessage'
import InputComponent from './Components/InputComponent'
import AppRouter from './Config/Router'

const handleClick = () => {
  alert("Button is clicked!")
}


const App = () => {
  const [model, setModel] = useState({})

  const fillModel = (key, value) =>{
    model[key] = value
    setModel({ ...model })
    console.log(model)
  }


  return (
    // <div>
    //   <Navbar/>
    //   <Button
    //    buttonText="Submit"
    //    buttonClick={handleClick}
    //    />
    //   <Footer/>
    //   <HelloMessage name="Abdullah">
    //     <button>Click</button>
    //   </HelloMessage>
    // </div>


    // <div>
    //   <InputComponent
    //     value={model.userName}
    //     onchange={(e) => (
    //       fillModel("FirstName", e.target.value)
    //     )
    //     }
    //     label="First Name"
    //   />
    // </div>
    

    <AppRouter/>
  )
}

export default App
