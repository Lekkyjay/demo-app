type LoaderResult<T> = { userPromise: Promise<T | { __error: Error }> }

export function createSuccessLoader<T>(data: T, delayMs: number = 50): () => Promise<LoaderResult<T>> {
  return async () => ({
    userPromise: new Promise((resolve) =>
      setTimeout(() => resolve(data), delayMs)
    ),
  })
}

export function createErrorLoader(error: Error, delayMs: number = 50): () => Promise<LoaderResult<never>> {
  return async () => ({
    userPromise: new Promise((resolve) =>
      setTimeout(() => resolve({ __error: error }), delayMs)
    ),
  })
}
