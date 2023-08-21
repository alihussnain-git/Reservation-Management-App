import Axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {BASE_URL} from './urls';
import * as ReservationAPI from './reservations';

const axiosClient = Axios.create({
  baseURL: BASE_URL,
});

export namespace API {
  export async function get<O, I extends {}>(
    url: string,
    params?: I,
    config?: AxiosRequestConfig,
  ): Promise<O> {
    const response = await axiosClient.get<O>(url, {
      params,
      ...config,
    });
    return onResponseSuccess(response);
  }

  export async function post<O, I extends {} | null>(
    url: string,
    params: I,
    config?: AxiosRequestConfig,
  ): Promise<O> {
    const response = await axiosClient.post<O>(
      url,
      params ? {...params} : null,
      config,
    );
    return onResponseSuccess(response);
  }

  export async function patch<O, I extends {}>(
    url: string,
    params?: I,
    config?: AxiosRequestConfig,
  ): Promise<O> {
    const response = await axiosClient.patch<O>(url, params, config);
    return onResponseSuccess(response);
  }

  function onResponseSuccess(response: AxiosResponse) {
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }

    throw new Error(response.statusText);
  }
}

export {ReservationAPI};
