import axios from "axios";

// Create an Axios instance for Admin API (on port 8086)
const adminInstance = axios.create({
  baseURL: "http://localhost:8083/api",  // Admin API running on port 8086
  timeout: 5000,
});

// Interceptor to add Authorization token to Admin API requests
adminInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Admin API requests

// Admin login
export const adminLogin = async (username, password) => {
  try {
    const response = await adminInstance.post("/login", {
      username,
      password,
    });
    // If login is successful, return response data
    const token = response.data.token;
    if (token) {
      localStorage.setItem("token", token); // Store the JWT token in localStorage
    }
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : "Error logging in.";
  }
};

// Get all Admins
export const getAllAdmins = async () => {
  try {
    const response = await adminInstance.get("/admin");
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : "Error fetching admin list.";
  }
};

// Get Admin by ID
export const getAdminById = async (id) => {
  try {
    const response = await adminInstance.get(`/admin/${id}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : "Error fetching admin by ID.";
  }
};

// Get Admin by Username
export const getAdminByUsername = async (username) => {
  try {
    const response = await adminInstance.get(`/admin/email/${username}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : "Error fetching admin by username.";
  }
};
