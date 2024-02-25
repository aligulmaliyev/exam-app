import { AxiosError, AxiosResponse } from "axios";

const handleResponse = <D>(response: AxiosResponse) => {
  return {
    data: response.data as D,
    error: null,
    status: response.status,
    statusText: response.statusText,
  };
};

const handleError = (error: AxiosError) => {
  return {
    data: null,
    error: error.response ? error.response.data : error.message,
    status: error.response ? error.response.status : 500,
    statusText: error?.response?.statusText,
  };
};

export const handleAxiosResponse = <D>(
  response: AxiosResponse | AxiosError
) => {
  if (response instanceof Error) {
    return handleError(response);
  } else {
    return handleResponse<D>(response);
  }
};
