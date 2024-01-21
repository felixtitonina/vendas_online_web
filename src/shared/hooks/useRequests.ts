import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthType } from "../../modules/login/types/AuthType";
import { ProductRoutesEnum } from "../../modules/product/routes";
import { ERROR_INVALID_PASSWORD } from "../constants/errosStatus";
import { URL_AUTH } from "../constants/urls";
import { setAuthorizationToken } from "../functions/connection/auth";
import ConnectionAPI, {
  connectionAPIPost,
  MethodType,
} from "../functions/connection/connectionAPI";
import { useGlobalContext } from "./useGlobalContext";

export const useRequests = () => {
  const [loading, setLoadding] = useState(false);

  const navigate = useNavigate();

  const { setNotification, setUser } = useGlobalContext();

  const request = async <T>(
    url: string,
    method: MethodType,
    saveGlobal?: (object: T) => void,
    body?: unknown,
  ): Promise<T | undefined> => {
    setLoadding(true);

    const returnObject: T | undefined = await ConnectionAPI.connect<T>(
      url,
      method,
      body,
    )
      .then((result) => {
        if (saveGlobal) {
          saveGlobal(result);
        }
        return result;
      })
      .catch((error: Error) => {
        setNotification(error.message, "error");
        return undefined;
      });
    setLoadding(false);
    return returnObject;
  };

  /**
   *2
   * @param url
   * @param body
   * @returns
   */
  const postRequest = async <T>(
    url: string,
    body: unknown,
  ): Promise<T | undefined> => {
    setLoadding(true);
    const returnData = await connectionAPIPost<T>(url, body)
      .then((result) => {
        setNotification("Senha válida", "success");
        navigate(ProductRoutesEnum.PRODUCT);
        return result;
      })
      .catch((error: Error) => {
        setNotification(error.message, "error");
        return undefined;
      });
    setLoadding(false);
    return returnData;
  };

  const authRequest = async (body: unknown): Promise<void> => {
    setLoadding(true);
    await connectionAPIPost<AuthType>(URL_AUTH, body)
      .then((result) => {
        setUser(result.user);
        setAuthorizationToken(result.accessToken);
        navigate(ProductRoutesEnum.PRODUCT);
        return result;
      })
      .catch(() => {
        setNotification(ERROR_INVALID_PASSWORD, "error");
        return undefined;
      });
    setLoadding(false);
  };
  return {
    loading,
    request,
    postRequest,
    authRequest,
  };
};
