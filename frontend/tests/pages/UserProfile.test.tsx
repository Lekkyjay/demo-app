import { describe, it, expect } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { createMemoryRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router'
import { UserProfile } from '../../src/pages/UserProfile'
import { createSuccessLoader, createErrorLoader } from '../mocks/loaders'

describe('UserProfile', () => {
  it('renders user name on success', async () => {
    const mockLoader = createSuccessLoader({ name: 'Mocked Alice' })

    // const routes = createRoutesFromElements(
    //   <Route path="/" element={<UserProfile />} loader={mockLoader} />
    // )

    // const router1 = createMemoryRouter(routes, {
    //   initialEntries: ['/'],
    // })

    const router = createMemoryRouter([ { path: '/', element: <UserProfile />, loader: mockLoader } ])

    render(<RouterProvider router={router} />)
    await screen.findByText('Loading...')
    await waitFor(() => {
      expect(screen.getByText('Mocked Alice')).toBeInTheDocument()
    })
  })

  it('renders error element on error', async () => {
    const mockLoader = createErrorLoader(new Error('Fetch failed'))

    const routes = createRoutesFromElements(
      <Route path="/" element={<UserProfile />} loader={mockLoader} />
    )

    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    })

    render(<RouterProvider router={router} />)
    await screen.findByText('Loading...')
    await waitFor(() => {
      expect(screen.getByText('Error loading user.')).toBeInTheDocument()
    })
  })
})
