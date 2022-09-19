import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'

function App() {
  const [users, setUsers] = useState([])
  const [userSelected, setUserSelected] = useState(null)

  useEffect(()=>{
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res => setUsers(res.data))
  }, [])

const getUsers = () => {
 axios.get('https://users-crud1.herokuapp.com/users/')
 .then(res => setUsers(res.data))
}

const selectUser = (user) => {
  setUserSelected(user)
}
const deselectUser = () => setUserSelected(null)

  return (
    <div className="App">
      <h1>Create your User</h1>
      <UsersForm 
      getUsers={getUsers}
      userSelected={userSelected}
      deselectUser={deselectUser}
     />
      <UsersList 
      users={users}
      getUsers={getUsers}
      selectUser={selectUser}/>
    </div>
  )
}

export default App
