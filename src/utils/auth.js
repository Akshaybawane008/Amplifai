// Save token
export const login = (token) => {
  localStorage.setItem("authToken", token)
}

// Remove token
export const logout = () => {
  localStorage.removeItem("authToken")
}

// Check if logged in
export const isAuthenticated = () => {
  return !!localStorage.getItem("authToken")
}
