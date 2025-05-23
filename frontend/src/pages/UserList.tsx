import { Suspense } from 'react'
import { useLoaderData, Await } from 'react-router'
import type { User } from '../lib/types'

type LoaderData = { usersPromise: Promise<User[] | { __error: Error }> }

export function UserList() {
  const { usersPromise } = useLoaderData() as LoaderData
  // console.log('usersPromise.......', usersPromise)

  return (
    <div>
      <h1>User List</h1>
      <Suspense fallback={<p>Loading users...</p>}>
        <Await resolve={usersPromise} errorElement={<p>Failed to load users.</p>}>
          {(result) => {
            if ('__error' in result) throw result.__error
            return (
              <ul data-testid="user-list">
                {result.map((user) => (
                  <li key={user.id}>
                    {user.name} ({user.email})
                  </li>
                ))}
              </ul>
            )
          }}
        </Await>
      </Suspense>
    </div>
  )
}