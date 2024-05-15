import { SortOrder } from "../../util/SortOrder";

export type ReminderOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isRecurring?: SortOrder;
  message?: SortOrder;
  recurrencePattern?: SortOrder;
  reminderTime?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
