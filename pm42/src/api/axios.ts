import axios from "axios";
import { redirect } from "react-router-dom";

const access = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 180000,
  withCredentials: false,
});

export const axiosGetMatchList = async (token: string): Promise<any> => {
  try {
    const response = await access.get("/api/slot/me/?token=" + token);
    console.log(response);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const axiosGetRank = async (token: string): Promise<any> => {
  try {
    const response = await access.get("/api/rank/?token=" + token);

    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const axiosGetAllSlots = async (token: string): Promise<any> => {
  try {
    const response = await access.get("/api/slot/?token=" + token);

    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const axiosAddSlot = async (
  start: number,
  end: number,
  subject: string,
  login: string,
  max: number,
  description: string,
  token: string
): Promise<any> => {
  try {
    const response = await access.post("/api/slot/?token=" + token, {
      start,
      end,
      subject,
      login,
      max,
      description,
    });
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const axiosRemoveSlot = async (
  token: string,
  id: number
): Promise<any> => {
  try {
    const response = await access.delete("/api/slot/?token=" + token, {
      data: {
        id,
      },
    });
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const axiosLogin = async (code: string): Promise<any> => {
  try {
    const response = await access.get("/api/login/?code=" + code);
    console.log("axiosLogin", response);
    return response;
  } catch (e) {
    console.error("hi", e);
  }
};
