const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

export const authService = {
  initiateRegister: async (userData) => {
    try {
      const response = await fetch(`${API_URL}/auth/register/initiate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
        credentials: "include",
      });
      return await response.json();
    } catch (error) {
      throw new Error("Registration initiation failed");
    }
  },

  verifyRegister: async (verificationData) => {
    try {
      const response = await fetch(`${API_URL}/auth/register/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(verificationData),
        credentials: "include",
      });
      return await response.json();
    } catch (error) {
      throw new Error("Registration verification failed");
    }
  },

  initiateLogin: async (email) => {
    try {
      const response = await fetch(`${API_URL}/auth/login/initiate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
        credentials: "include",
      });
      return await response.json();
    } catch (error) {
      throw new Error("Login initiation failed");
    }
  },

  verifyLogin: async (verificationData) => {
    try {
      const response = await fetch(`${API_URL}/auth/login/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(verificationData),
        credentials: "include",
      });
      return await response.json();
    } catch (error) {
      throw new Error("Login verification failed");
    }
  },
};
