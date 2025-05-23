import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router';
import type { ICategory } from '../lib/types';

type LoaderData = { categoriesPromise: Promise<ICategory[] | { __error: Error }> }

export default function Categories() {
  const { categoriesPromise } = useLoaderData() as LoaderData

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      <Suspense fallback={<h2>Loading categories...</h2>}>
        <Await resolve={categoriesPromise} errorElement={<div>Could not load categories 😬</div>}>
          {(resolvedCategories) => {
            // console.log('resolvedCategories.....', resolvedCategories)
            if ('__error' in resolvedCategories) throw resolvedCategories.__error
            return (
              <ul className="list-disc list-inside" data-testid="category-list">
                {resolvedCategories.map((category, index) => (
                  <li key={index}>{category.name}</li>
                ))}
              </ul>
            )
          }}
        </Await>
      </Suspense>
    </div>
  );
}
