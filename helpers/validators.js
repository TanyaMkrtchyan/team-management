export const required = [
  v => !!v || 'Required field',
]

export const email = [
  v => !!v || 'E-mail is required',
  v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
]

export const password = [
  v => !!v || 'Required field',
  v => v.length >= 8 || 'Min 8 characters',
]