import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { editUser, getTodoList } from "./userSlice"
import { toast } from "react-toastify";

const EditUser = () => {
  const params = useParams().id;
  //console.log(params);
  const dispatch = useDispatch();
  const users = useSelector(getTodoList);
  const navigate = useNavigate();
//  const existingUser = users.filter(user => user.id === params.id);
//   const { name, task} = existingUser[0];
  // const [values, setValues] = useState({
  //   name,
  //   task
  // });
 let obj = users.find((e)=> e.id == params)
 // const [edit_user, setEditUser] = useState(users[params]);
  const [Chng_t,setChng_t]= useState(obj.taskname)

  const handleInput = (e) => {
    setChng_t (e.target.value)
    console.log(Chng_t);
   // console.log(params);
  }




  // const handleEditUser = () => {
  //   setValues({ 
  //     name: '',
  //     task: '' 
  //   });
  //   dispatch(editUser({
  //     id: params.id,
  //     name: values.name,
  //     task: values.task
  //   }));
  // //  navigate('/');
  // }

  const handleEditUser =()=>{
    console.log(Chng_t);
    if (!Chng_t) {
      toast.error("Please fill the updated task");
    } else {
      dispatch( editUser({
        id: params,
        changetask:Chng_t
    }), 
      navigate("/"));
       toast.success("Updated... succesfully");
     }
  }

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        value={"" || obj.name}
       // onChange={(e) => handleInput(e)}
        inputProps={{ type: 'text', placeholder: 'Enter Name' }}
      />
      <br />
      <TextField
        label="Task"
        value={"" || Chng_t}
        onChange={(e) => handleInput(e)}
        inputProps={{ type: 'task', placeholder: 'Enter task' }}
      />
      <Button onClick={()=>handleEditUser()}>Edit</Button>
    </div>
  )
}

export default EditUser