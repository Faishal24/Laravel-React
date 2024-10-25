import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [students, setStudents] = useState([]);

  const [loading, setLoading] = useState(false);
  const [loadingId, setLoadingId] = useState(null);
  const [loadingEdit, setLoadingEdit] = useState(false);
  const [loadingIdEdit, setLoadingIdEdit] = useState(null);

  const [form, setForm] = useState({
    name: "",
    age: 0,
    address: "",
    phone: "",
    email: "",
  });

  const fetchData = () => {
    axios
      .get("http://localhost:8000/api/students")
      .then((res) => {
        setStudents(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    setLoadingId(id);
    setLoading(true);
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/students/${id}`
      );
      console.log(response);
      fetchData();
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (item) => {
    setForm(item);
    document.getElementById("edit_modal").showModal();
  };

  const handleSave = async (id) => {
    setLoadingIdEdit(id);
    setLoadingEdit(true);
    try {
      const response = await axios.put(
        `http://localhost:8000/api/students/${id}`,
        form
      );
      console.log(response);
      fetchData();
      setLoadingEdit(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="px-10">
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
                    <button
                      className="btn btn-accent"
                      onClick={() => handleEdit(student)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-error"
                      onClick={() => handleDelete(student.id)}
                      disabled={loadingId == student.id}
                    >
                      {loadingId == student.id && loading ? (
                        <span className="loading loading-spinner loading-sm"></span>
                      ) : (
                        "Delete"
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <dialog id="edit_modal" className="modal">
          <div className="modal-box flex flex-col gap-4">
            <h3 className="font-bold text-xl">Student Data</h3>
            <label className="input input-bordered flex items-center gap-2">
              Name
              <input
                type="text"
                className="grow"
                value={form.name}
                name="name"
                onChange={handleForm}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Age
              <input
                type="number"
                className="grow"
                value={form.age}
                name="age"
                onChange={handleForm}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Address
              <input
                type="text"
                className="grow"
                value={form.address}
                name="address"
                onChange={handleForm}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Phone
              <input
                type="text"
                className="grow"
                value={form.phone}
                name="phone"
                onChange={handleForm}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Email
              <input
                type="email "
                className="grow"
                value={form.email}
                name="email"
                onChange={handleForm}
              />
            </label>
            <button
              className="btn btn-primary"
              onClick={() => handleSave(form.id)}
            >
              {loadingIdEdit == form.id && loadingEdit ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                "Save"
              )}
            </button>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </>
  );
}

export default App;
