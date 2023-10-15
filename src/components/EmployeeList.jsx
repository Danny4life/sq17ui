import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import Employee from "./Employee";

const EmployeeList = () => {

    const[loading, setLoading] = useState(true);
    const[employees, setEmployees] = useState(null);

    const navigate = useNavigate();


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try{
                const response = await EmployeeService.getEmployees();
                setEmployees(response.data);
            }catch(error){
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    const deleteEmployee = (e, id) => {
      e.preventDefault();
      
      EmployeeService.deleteEmployee(id).then((response) => {
        if(employees){
          setEmployees((prevElement) => {
            return prevElement.filter((employee) => employee.id !== id);
          });
        }
      });
    };


  return (
    <div className="container mx-auto my-10">
      <div className="h-12">
        <button
           onClick={() => navigate("/add-employee")}
          type="button"
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold"
        >
          Add Employee
        </button>
      </div>
      <div className="flex border-b shadow">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-gray-500 uppercase text-left font-medium tracking-wider py-3 px-6">
                First Name
              </th>
              <th className="text-gray-500 uppercase text-left font-medium tracking-wider py-3 px-6">
                Last Name
              </th>
              <th className="text-gray-500 uppercase text-left font-medium tracking-wider py-3 px-6">
                Email
              </th>
              <th className="text-gray-500 uppercase text-right font-medium tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          {!loading && (
          <tbody className="text-bg-white">
          {employees.map((employee) => (
            <Employee 
                employee={employee}
                key={employee.id}
                deleteEmployee={deleteEmployee}

            />
            ))}
          </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
