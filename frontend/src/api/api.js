import axios from "axios";

const API = axios.create({
  baseURL: "https://firstproject-1-tm8k.onrender.com/api/products"
});

export default API;