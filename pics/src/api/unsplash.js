import axios from 'axios';

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: 'Client-ID 2C2oxkaCMfBE6KjrPPelxtIHrt8lxuzU4BUSP4p8_sg'
  }
})