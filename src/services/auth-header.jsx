export default function authHeader() {

    const jwtToken = JSON.parse(localStorage.getItem("jwt"));
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

    if (isLoggedIn) {
         return { Authorization: "Bearer " + jwtToken };
    } else {
      return {};
    }
  }