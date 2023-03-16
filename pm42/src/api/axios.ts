import axios from "axios";

const access = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 180000,
  withCredentials: false,
});

const getToken = () => `?token=${localStorage.getItem("token")}`;

export const axiosLogin = async (code: string): Promise<any> => {
  try {
    const response = await access.get("/api/login/?code=" + code);
    console.log(response);
  } catch (e) {
    console.error(e);
  }
};

export const axiosGetMatchList = async (): Promise<any> => {
  try {
    const response = await access.get("/api/slot/me/" + getToken());

    console.log("axiosGetMatchList, /api/slot/me/");
    console.log(response);
  } catch (e) {
    console.error(e);
  }
};

export const axiosGetRank = async (): Promise<any> => {
  try {
    const response = await access.get("/api/rank/" + getToken());

    console.log("axiosGetMatchList, /api/rank/");
    console.log(response);
  } catch (e) {
    console.error(e);
  }
};

export const axiosGetAllSlots = async (): Promise<any> => {
  try {
    const response = await access.get("/api/slot/" + getToken());

    console.log("axiosGetMatchList, /api/slot/all/");
    console.log(response);
  } catch (e) {
    console.error(e);
  }
};

export async function getData(func: any) {
  await func();
}

export const axiosAddSlot = async (
  start: number,
  end: number,
  subject: string,
  login: string,
  max: number
): Promise<any> => {
  try {
    const response = await access.post("/api/slot/" + getToken(), {
      start,
      end,
      subject,
      login,
      max,
    });
    console.log(response);
  } catch (e) {
    console.error(e);
  }
};
