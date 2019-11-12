export default async ({ store, redirect, app: { $apolloHelpers } }) => {
  const token = $apolloHelpers.getToken()
  // const loading = store.getters['auth/loading']
  // const authUser = store.getters['auth/authUser']

  if (token) {
    // if no toket
    redirect('/')
  }
}
