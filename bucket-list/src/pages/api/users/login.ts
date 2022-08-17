import axios from "axios";

const loginApi = async (data: object) => {
  try{
    const uri = "http://localhost:8080/auth/login"
    axios.post(uri, data).then((response)=> {
      return response;
    });
  } catch(error) {
    console.log(error);
  }
}

export default loginApi;
