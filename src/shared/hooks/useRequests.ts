import axios from "axios";
import { useState } from "react";

import { connectionAPIPost } from "../functions/connection/connectionAPI";
import { useGlobalContext } from "./useGlobalContext";

export const useRequests = () => {
  const [loading, setLoadding] = useState(false);
  const { setNotification } = useGlobalContext();

  const getRequest = async (url: string) => {
    setLoadding(true);
    const returnData = await axios({
      method: "get",
      url: url,
    })
      .then((result) => {
        alert(`Login sucesso!!!`);
        return result.data;
      })
      .catch(() => {
        alert(`Error`);
      });
    setLoadding(false);
    return returnData;
  };

  /**
   *
   * @param url
   * @param body
   * @returns
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const postRequest = async (url: string, body: unknown) => {
    setLoadding(true);
    const returnData = await connectionAPIPost(url, body)
      .then((result) => {
        setNotification("Senha válida", "success");
        return result;
      })
      .catch((error: Error) => {
        setNotification(error.message, "error");
      });
    setLoadding(false);
    return returnData;
  };

  return {
    loading,
    getRequest,
    postRequest,
  };
};
