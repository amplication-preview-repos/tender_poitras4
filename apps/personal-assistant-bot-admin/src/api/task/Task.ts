import { User } from "../user/User";

export type Task = {
  createdAt: Date;
  description: string | null;
  dueDate: Date | null;
  id: string;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
