import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest';
import { RouterProvider, createMemoryRouter, createRoutesFromElements, Route } from 'react-router'
import ProductList from '../../src/pages/ProductList'
import { productsLoader } from '../../src/lib/loaders'

describe('ProductList page', () => {
  const mockProducts = [
    { id: '1', name: 'Product 1' },
    { id: '2', name: 'Product 2' },
  ]

  const renderWithRouter = (loader: typeof productsLoader) => {
    const router = createMemoryRouter([{ path: '/', element: <ProductList />, loader } ])
      
    render(<RouterProvider router={router} />)
  }

  it('renders products when data is successfully loaded', async () => {
    const mockLoader = vi.fn().mockResolvedValueOnce({ products: mockProducts })

    renderWithRouter(mockLoader)

    // Wait for the data to load
    await waitFor(() => {
      expect(screen.getByText('Product 1')).toBeInTheDocument()
      expect(screen.getByText('Product 2')).toBeInTheDocument()
    })
  })

  it('renders error element on loader failure', async () => {
    const mockLoader = vi.fn().mockRejectedValueOnce(new Error('Failed to load products'))    

    renderWithRouter(mockLoader)

    // Wait for error element
    await waitFor(() => {
      expect(screen.getByText('Failed to load products')).toBeInTheDocument()
    })
  })

  it('renders "No products available" when products array is empty', async () => {
    const mockLoader = vi.fn().mockResolvedValueOnce({ products: [] })

    renderWithRouter(mockLoader)

    // Wait for the data to load
    await waitFor(() => {
      expect(screen.getByText('No products available.')).toBeInTheDocument()
    })
  })
})
