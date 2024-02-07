// pages/users/index.js
import React from 'react'
import Link from 'next/link'

const usersData = [
  { id: 1, name: 'Alice', todos: ['Buy groceries', 'Pay bills'] },
  { id: 2, name: 'Bob', todos: ['Walk the dog', 'Finish homework'] },
  { id: 3, name: 'Charlie', todos: ['Go to the gym', 'Call mom'] }
]

const UsersPage = () => {
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {usersData.map(user => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UsersPage
