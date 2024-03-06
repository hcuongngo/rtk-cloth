import axios from "axios";
import { PRODUCT_URL } from '../constant'

const fakeAPI = () => {
  return axios.create({
    baseURL: PRODUCT_URL
  })
}

export default fakeAPI;
