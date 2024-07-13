import { jwtDecode } from "jwt-decode";

export const verifyToken = () => {
  const token = localStorage.getItem("auth");

  if (!token) {
    return { valid: false, role: 0 };
  }

  try {
    const decoded = jwtDecode(token);

    const now = Date.now() / 1000;

    if (decoded.exp < now) {
      return { valid: false, role: 0 };
    }

    const roles = decoded.role;
    const name = decoded.name;
    const email = decoded.email;
    return { valid: true, role: roles, name, email, token };
  } catch (error) {
    return { valid: false, role: 0 };
  }
};
