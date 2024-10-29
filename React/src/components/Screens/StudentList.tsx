import { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

interface Student {
  id: number;
  name: string;
  age: number;
  email: string;
  phone: string;
  address: string;
}

const StudentList = () => {
  const [students, setStudents] = useState<Student[]>([]);

  const [loading, setLoading] = useState<boolean>(false);
  const [loadingId, setLoadingId] = useState<number | undefined>(undefined);
  const [loadingEdit, setLoadingEdit] = useState<boolean>(false);
  const [loadingIdEdit, setLoadingIdEdit] = useState<number | undefined>(
    undefined
  );

  const [form, setForm] = useState<Student>({
    id: 0,
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

  const handleDelete = async (id: number) => {
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

  const handleEdit = (item: Student) => {
    setForm(item);
  };

  const handleSave = async (id: number) => {
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

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Id</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.id}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.age}</TableCell>
                <TableCell>{student.address}</TableCell>
                <TableCell>{student.phone}</TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell className="flex gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="btn btn-accent"
                        onClick={() => handleEdit(student)}
                      >
                        Edit
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit student profile</DialogTitle>
                        <DialogDescription>
                          Make changes to your profile here. Click save when
                          you're done.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="name" className="text-right">
                            Name
                          </Label>
                          <Input
                            id="name"
                            value={form.name}
                            className="col-span-3"
                            onChange={handleForm}
                            name="name"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="age" className="text-right">
                            Age
                          </Label>
                          <Input
                            id="age"
                            defaultValue={form.age}
                            className="col-span-3"
                            type="number"
                            onChange={handleForm}
                            name="age"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="address" className="text-right">
                            Address
                          </Label>
                          <Input
                            id="address"
                            defaultValue={form.address}
                            className="col-span-3"
                            onChange={handleForm}
                            name="address"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="phone" className="text-right">
                            Phone
                          </Label>
                          <Input
                            id="phone"
                            defaultValue={form.phone}
                            className="col-span-3"
                            onChange={handleForm}
                            name="phone"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="email" className="text-right">
                            Email
                          </Label>
                          <Input
                            id="email"
                            defaultValue={form.email}
                            className="col-span-3"
                            onChange={handleForm}
                            name="email"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button
                          type="submit"
                          onClick={() => handleSave(form.id)}
                        >
                          {loadingEdit && loadingIdEdit == form.id ? "Loading" : "Save"}
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                  <Button
                    variant="destructive"
                    className="btn btn-error"
                    onClick={() => handleDelete(student.id)}
                    disabled={loadingId == student.id}
                  >
                    {loading && loadingId == student.id ? "Loading" : "Delete"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

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
              Save
            </button>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </>
  );
};

export default StudentList;
