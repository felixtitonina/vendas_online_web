import axios from "axios";

import {
  ERROR_ACCESS_DENIED,
  ERROR_CONNECTION,
} from "../../constants/errosStatus";
import { MethodsEnum } from "../../enums/methods.enum";

export default class ConnectionAPI {
  /**
   * static uma função que não ira mudar
   * @param url
   * @param method
   * @param body
   * @returns
   */
  static async call<T>(url: string, method: string, body?: unknown) {
    switch (method) {
      case MethodsEnum.GET:
        return (await axios.get<T>(url)).data;
      case MethodsEnum.DELETE:
        return (await axios.delete<T>(url)).data;
      case MethodsEnum.POST:
        return (await axios.post<T>(url, body)).data;
      case MethodsEnum.PUT:
        return (await axios.put<T>(url, body)).data;
      case MethodsEnum.PATCH:
        return (await axios.patch<T>(url, body)).data;
    }
  }
  static async connect(url: string, method: string, body?: unknown) {
    return ConnectionAPI.call(url, method, body).catch((error) => {
      if (error.response) {
        switch (error.response.status) {
          case 400:
          case 401:
          case 403:
            throw new Error(ERROR_ACCESS_DENIED);
          default:
            throw new Error(ERROR_CONNECTION);
        }
      }
    });
  }
}

export const connectionAPIGet = async (url: string) => {
  return ConnectionAPI.connect(url, MethodsEnum.GET);
};

export const connectionAPIDelete = async (url: string) => {
  return ConnectionAPI.connect(url, MethodsEnum.DELETE);
};

export const connectionAPIPost = async (url: string, body: unknown) => {
  return ConnectionAPI.connect(url, MethodsEnum.POST, body);
};

export const connectionAPIPut = async (url: string, body: unknown) => {
  return ConnectionAPI.connect(url, MethodsEnum.PUT, body);
};

export const connectionAPIPatch = async (url: string, body: unknown) => {
  return ConnectionAPI.connect(url, MethodsEnum.PATCH, body);
};
