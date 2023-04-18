import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { addUser } from "./userSlice"

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    task: ''
  });

  const handleAddUser = () => {
    setValues({ name: '', task: '' });
    dispatch(addUser({
      id: uuidv4(),
      name: values.name,
      task: values.task
    }));
    navigate('/');
  }

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Enter Name' }}
      />
      <br />
      <TextField
        label="Task"
        value={values.task}
        onChange={(e) => setValues({ ...values, task: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Enter Task' }}
      />
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  )
}

export default AddUser