import api from "./api"

const TOKEN_KEY = 'guia@token'

export const signIn = async (token) => {
  localStorage.setItem(TOKEN_KEY, token)
}

export const isLogged = () => {

  return localStorage.getItem(TOKEN_KEY) ? true : false
  // try {
  //   const response = await api.get(`/auth/me`)

  //   if (response.status === 401) {
  //     return false
  //   }

  //   return true
  // }
  // catch (err) {
  //   return false
  // }
}
