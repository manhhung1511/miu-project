export default function useAuthentication() {
  const tokens = localStorage.getItem('token') as string;

  // User is considered logined if exists access token
  if (tokens) {
    return true;
  }

  return false;
}
