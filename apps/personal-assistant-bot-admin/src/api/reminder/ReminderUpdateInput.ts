import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReminderUpdateInput = {
  isRecurring?: boolean | null;
  message?: string | null;
  recurrencePattern?: "Option1" | null;
  reminderTime?: Date | null;
  user?: UserWhereUniqueInput | null;
};
