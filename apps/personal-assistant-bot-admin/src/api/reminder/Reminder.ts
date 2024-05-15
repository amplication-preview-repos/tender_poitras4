import { User } from "../user/User";

export type Reminder = {
  createdAt: Date;
  id: string;
  isRecurring: boolean | null;
  message: string | null;
  recurrencePattern?: "Option1" | null;
  reminderTime: Date | null;
  updatedAt: Date;
  user?: User | null;
};
