import { notification } from "antd";

export const useNotification = () => {
  const [api, contextHolder] = notification.useNotification();
  return {
    api,
    contextHolder,
  };
};
