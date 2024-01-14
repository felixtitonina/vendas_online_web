import axios from "axios";
import { useState } from "react";

export const useRequests = () => {
  const [loading, setLoadding] = useState(false);

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
  const postRequest = async (url: string, body: any) => {
    setLoadding(true);
    const returnData = await axios({
      method: "post",
      url: url,
      data: body,
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

  return {
    loading,
    getRequest,
    postRequest,
  };
};
