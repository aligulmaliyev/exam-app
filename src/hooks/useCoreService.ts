import axios, { AxiosRequestConfig, AxiosError } from "axios";

import { BASE_URL } from "@/constants";
import { handleAxiosResponse } from "./utility/handleAxiosResponse";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  },
});

export const useCoreService = () => {
  const getRequest = async <Res>(url: string, config?: AxiosRequestConfig) => {
    try {
      const response = await axiosInstance.get<Res>(url, config);
      return handleAxiosResponse<Res>(response);
    } catch (error) {
      const axiosError = error as AxiosError;
      return handleAxiosResponse<Res>(axiosError);
    }
  };

  const postRequest = async <Req, Res>(
    url: string,
    data: Req = {} as Req,
    config?: AxiosRequestConfig
  ) => {
    try {
      const response = await axiosInstance.post<Res>(url, data, config);
      return handleAxiosResponse<Res>(response);
    } catch (error) {
      const axiosError = error as AxiosError;
      return handleAxiosResponse<Res>(axiosError);
    }
  };

  return {
    getRequest,
    postRequest,
  };
};
