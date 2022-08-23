/* eslint-disable prettier/prettier */
import axios from "axios";

// const loginApi = async (data: object) => {
//   try {
//     const uri = "http://localhost:8080/auth/login";
//     axios.post(uri, data).then(response => {
//       return response;
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

const loginApi = async (data: { email: string; password: string; }) => {
  const url = `http://localhost:8080/auth/login`;
  try {
    const response = await axios.post(url, data);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export default loginApi;
