import axios from "axios";

const clienteAxios = axios.create({
  baseURL: "https://web-production-e5dc.up.railway.app/api/",
});

//https://web-production-4514.up.railway.app/api/

export default clienteAxios;
