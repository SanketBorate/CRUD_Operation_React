import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { deleteUser, getTodoList } from "./userSlice";
import { useState } from "react"
import { addUser } from "./userSlice"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { v4 as uuidv4 } from 'uuid';
import {
  clearCompletedTaskList,
  getCompeletedTaskList,
  setCompeletedTaskList,
} from "./CompletedTaskSlice";


const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(getTodoList);
  const compeleted_list = useSelector(getCompeletedTaskList);
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    task: ''
  });

  //console.log(users.length)
  //add user-task
  
  const handleAddUser = () => {
    // setValues({ name: '', task: '' })

    // if (setValues("")){
    //   console.log(setValues);
    
    //   toast.error("Please, fill task field");
    // } 
    // else 
    
      dispatch(addUser({
        id: uuidv4(),
        name: values.name,
        taskname: values.task
      }));
      toast("Task added succesfully");
      setValues("");
      navigate('/');
      
    
  
  }


  //remove user-task
  const handleRemoveUser = (ind) => {
    console.log(ind);
    if (
      window.confirm(
        "are you sure, you want to delete this task ???"
      )
    ) {
      dispatch(deleteUser({ id:ind }));
      toast("Task delete successfully...");
    }
    
  }

  const handleCompelete = (id) => {
    dispatch(setCompeletedTaskList(id));
    if (window.confirm("are you sure ? this task was done")) {
      dispatch(deleteUser({ id }));
      toast.success("Congractulatins.!!!! succesfully compeleted");
    }
  };

  // const handleDeleteAll = () => {
  //   if (window.confirm("are you sure you dont need this list????")) {
  //     dispatch(clearCompletedTaskList());
  //     toast.success("succesfully delete all comepeleted task");
  //   }
  // };
  
  const renderCard = () => users.map(user => (
    
    <div className="bg-gray-300 p-5 flex items-center justify-between" key={user.id}>
      <div>
        <h3 className="font-bold text-lg text-gray-700">{user.name}</h3>
        <span className="font-normal text-gray-600">{user.taskname}</span>
      </div>
      <div className="flex gap-4">
        <Link to={`edit-user/${user.id}`}>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 22 22" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
        </Link>

        <button
          onClick={() => handleRemoveUser(user.id)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 25 25" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>

        <button
          onClick={() => handleCompelete(user.id)}
        >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 15 15" stroke="currentColor" strokeWidth={1}> 
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/> 
        </svg>
        </button>

      


      </div>
    </div>
  ))

  return (
    <div>
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
    
      <div className="grid gap-5 md:grid-cols-2">
        {users.length ? renderCard() : <p className="text-center col-span-2 text-gray-700 font-semibold">No User</p>}
      </div>
    </div>
  )
}

export default UserList