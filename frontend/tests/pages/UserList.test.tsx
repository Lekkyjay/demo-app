import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { createMemoryRouter, RouterProvider, RouteObject } from 'react-router';
import { UserList } from '../../src/pages/UserList';

function createTestRouter(loader: RouteObject['loader']) {
  const router = createMemoryRouter(
    [
      {
        path: '/',
        element: <UserList />,
        loader,
      },
    ],
    // { initialEntries: ['/'] }
  );

  return router;
}

describe('<UserList />', () => {
  it('renders user list on success', async () => {
    const loader = async () => ({
      usersPromise: Promise.resolve([
        { id: 1, name: 'Alice', email: 'alice@example.com' },
        { id: 2, name: 'Bob', email: 'bob@example.com' },
      ]),
    });

    render(<RouterProvider router={createTestRouter(loader)} />);

    expect(await screen.findByText('Loading users...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByTestId('user-list')).toBeInTheDocument();
      expect(screen.getByText(/Alice/)).toBeInTheDocument();
      expect(screen.getByText(/Bob/)).toBeInTheDocument();
    });
  });

  it('renders <Await> errorElement on error result', async () => {
    const loader = async () => ({
      usersPromise: Promise.resolve({ __error: new Error('Simulated error') }),
    });

    render(<RouterProvider router={createTestRouter(loader)} />);

    expect(await screen.findByText('Loading users...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Failed to load users.')).toBeInTheDocument();
    });
  });
});
