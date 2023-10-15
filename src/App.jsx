import { BrowserRouter, Routes, Route} from "react-router-dom"
import EmployeeList from "./components/EmployeeList"
import AddEmployee from "./components/AddEmployee"
import UpdateEmployee from "./components/UpdateEmployee"

function App() {
  
  return (
    <>
      
       <BrowserRouter>
        <Routes>
          <Route index element={<EmployeeList />} />
          <Route path="/" element={<EmployeeList />} />
          <Route path="/employeelist" element={<EmployeeList />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/edit-employee/:id" element={<UpdateEmployee />} />
        </Routes>
       </BrowserRouter>
      
    </>
  )
}

export default App
