export const viewTransition = (fn: (params: string) => void, params: string) => {
  if (document.startViewTransition) {
    document.startViewTransition(() => fn(params))
  } else {
    fn(params)
  }
}
