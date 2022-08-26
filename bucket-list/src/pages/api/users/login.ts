import axios from "../../../../config/axios";

interface LoginAPIBody {
  email: string;
  password: string;
}

interface SignupAPIBody {
  email: string;
  password: string;
  nickName: string;
  tel: string;
}

export const loginApi = async (body: LoginAPIBody) => {
  const url = "/auth/login";
  return axios.post(url, body);
};

export const signupApi = async (body: SignupAPIBody) => {
  const url = "/auth/signup";
  return axios.post(url, body);
};
