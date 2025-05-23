import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { createMemoryRouter, RouterProvider, RouteObject } from 'react-router';
import Categories from '../../src/pages/Categories';

function createTestRouter(loader: RouteObject['loader']) {
  const router = createMemoryRouter([{ path: '/', element: <Categories />, loader } ])
  return router
}

describe('Categories', () => {
  it('renders Categories page', async () => {
    const loader = async () => ({ categoriesPromise: Promise.resolve(
      [
        { id: 1, name: 'Category 1' },
        { id: 2, name: 'Category 2' },
        { id: 3, name: 'Category 3' }
      ]
    )})

    render(<RouterProvider router={createTestRouter(loader)} />)

    // display Suspense fallback while categories load
    await screen.findByText('Loading categories...')

    await waitFor(() => {
      expect(screen.getByTestId('category-list')).toBeInTheDocument();
      expect(screen.getByText(/Category 1/)).toBeInTheDocument();
      expect(screen.getByText(/Category 2/)).toBeInTheDocument();
      expect(screen.getByText(/Category 3/)).toBeInTheDocument();
    });

    // Check if the categories list is rendered    
    expect(await screen.findByRole('list')).toBeInTheDocument();
    expect(await screen.findByText('Category 1')).toBeInTheDocument();
    expect(await screen.findByText('Category 2')).toBeInTheDocument();
    expect(await screen.findByText('Category 3')).toBeInTheDocument();    
  })


  it('renders <Await> errorElement on error result', async () => {
    const loader = async () => ({ categoriesPromise: Promise.resolve({ __error: new Error('Simulated error') }) })

    render(<RouterProvider router={createTestRouter(loader)} />)

    // display Suspense fallback while categories load
    expect(await screen.findByText('Loading categories...')).toBeInTheDocument()

    // display Await errorElement's message
    await waitFor(() => {
      expect(screen.getByText('Could not load categories 😬')).toBeInTheDocument()
    })
  })
});