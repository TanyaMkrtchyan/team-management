export default function ({ app, redirect }) {
  if (!app.store.state.user.user) {
    redirect('/auth/sign-in')
  }
}