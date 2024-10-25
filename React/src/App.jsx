import { useState, useEffect } from "react";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/students/")
      .then((res) => res.json())
      .then((data) => setStudents(data.data));
  }, []);

  return (
    <>
      <div className="px-72">
        <h1 className="text-3xl font-bold text-center py-10">Student List</h1>
        <div className="overflow-x-auto">
          <table className="table table-lg">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.address}</td>
                  <td>{student.phone}</td>
                  <td>{student.email}</td>
                  <td className="flex gap-3">
                    <button className="btn btn-accent">Edit</button>
                    <button className="btn btn-error">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
