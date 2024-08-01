// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const viewTransition = (fn: (params: any) => void, params: any) => {
  if (document.startViewTransition) {
    document.startViewTransition(() => fn(params))
  } else {
    fn(params)
  }
}
