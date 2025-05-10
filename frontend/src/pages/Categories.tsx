import { Suspense } from 'react'
import { Await, useLoaderData } from 'react-router'
import type { ICategory } from '../lib/types'

export default function Categories() {
  const { categories } = useLoaderData() as { categories: Promise<ICategory[]> }  

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      <Suspense fallback={<h2>Loading categories...</h2>}>
        <Await resolve={categories} errorElement={<div>Could not load categories 😬</div>}>
          {(resolvedCategories: ICategory[]) => (
            <ul className="list-disc list-inside">
              {resolvedCategories.map((category, index) => (
                <li key={index}>{category.name}</li>
              ))}
            </ul>
          )}
        </Await>
      </Suspense>      
    </div>
  )
} 