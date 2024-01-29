export type NotificationEnum = "success" | "info" | "warning" | "error";

export interface NotificationTypes {
  message: string;
  type: NotificationEnum;
  description?: string;
}
