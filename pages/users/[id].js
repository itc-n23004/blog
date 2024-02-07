// pages/users/[id].js
import React from 'react'
import { useRouter } from 'next/router'

const usersData = [
  { id: 1, name: 'Alice', todos: ['Buy groceries', 'Pay bills'] },
  { id: 2, name: 'Bob', todos: ['Walk the dog', 'Finish homework'] },
  { id: 3, name: 'Charlie', todos: ['Go to the gym', 'Call mom'] }
]

const UserPage = () => {
  const router = useRouter()
  const { id } = router.query
  const user = usersData.find(user => user.id === parseInt(id))

  if (!user) return <div>User not found</div>

  return (
    <div>
      <h1>{user.name}'s Todo List</h1>
      <ul>
        {user.todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserPage
