import { BrowserRouter, Routes, Route} from "react-router-dom"
import EmployeeList from "./components/EmployeeList"
import AddEmployee from "./components/AddEmployee"

function App() {
  
  return (
    <>
      
       <BrowserRouter>
        <Routes>
          <Route index element={<EmployeeList />} />
          <Route path="/" element={<EmployeeList />} />
          <Route path="/employeelist" element={<EmployeeList />} />
          <Route path="/add-employee" element={<AddEmployee />} />
        </Routes>
       </BrowserRouter>
      
    </>
  )
}

export default App
