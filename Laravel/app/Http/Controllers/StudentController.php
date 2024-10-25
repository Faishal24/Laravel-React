<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use Validator;

class StudentController extends Controller
{
    public function index()
    {
        $student = Student::all();

        return response()->json([
            'status' => 'success',
            'data' => $student
        ]);
    }

    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'age' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'address' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors()
            ]);
        }

        else {
            $student = new Student();
            $student->name = $request->name;
            $student->age = $request->age;
            $student->email = $request->email;
            $student->phone = $request->phone;
            $student->address = $request->address;
            $student->save();

            return response()->json([
                'status' => 'success',
                'message' => 'Student added successfully'
            ]);
        }
    }

    public function update(Request $request, $id) {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'age' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'address' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors()
            ]);
        }

        else {
            $student = Student::find($id);
            $student->name = $request->name;
            $student->age = $request->age;
            $student->email = $request->email;
            $student->phone = $request->phone;
            $student->address = $request->address;
            $student->save();

            return response()->json([
                'status' => 'success',
                'message' => 'Student updated successfully'
            ]);
        }
    }

    public function delete($id) {
        $student = Student::find($id);
        $student->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Student deleted successfully'
        ]);
    }
}
