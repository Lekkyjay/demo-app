import { Suspense } from 'react'
import { useLoaderData, Await } from 'react-router'

export function UserProfile() {
  const { userPromise } = useLoaderData() as { userPromise: Promise<{ name: string }> }

  return (
    <div>
      <h1>User Profile</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={userPromise} errorElement={<p>Error loading user.</p>}>
          {(user) => {
            if ('__error' in user) throw user.__error;
            return <div>{user.name}</div>;
          }}
        </Await>
      </Suspense>
    </div>
  )
}