import Contact from "./components/Contact"
function App() {
  let fName = "Birendra"
  return (
    <>
       <h1>Welcome to React</h1>
       <h2>Hello and welcome</h2>
       
       <Contact name = {fName} age = {23} country = "Nepal"   />  
    </>
  
  )
}


export default App
