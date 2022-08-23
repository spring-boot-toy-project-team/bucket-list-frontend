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

const loginApi = async () => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=bd278d7ccd0737ea15f7e000bf917678&lang=kr`;
  try {
    const response = await axios.get(url);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export default loginApi;
