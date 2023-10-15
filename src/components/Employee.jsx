

const Employee = ({ employee }) => {
  return (
    <tr key={employee.id}>
        <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">
            {employee.firstName}
        </div>
        </td>
        <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">
            {employee.lastName}
        </div>
        </td>
        <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">
            {employee.email}
        </div>
        </td>
        <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
        <a className="hover:cursor-pointer text-indigo-600 hover:text-indigo-800 px-4">Edit</a>
        <a className="hover:cursor-pointer text-red-600 hover:text-red-800">Delete</a>
        </td>
  </tr>
  )
}

export default Employee