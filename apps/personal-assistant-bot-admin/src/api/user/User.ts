import { Automation } from "../automation/Automation";
import { Integration } from "../integration/Integration";
import { Reminder } from "../reminder/Reminder";
import { Task } from "../task/Task";

export type User = {
  automations?: Array<Automation>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  integrations?: Array<Integration>;
  lastName: string | null;
  password: string | null;
  reminders?: Array<Reminder>;
  tasks?: Array<Task>;
  updatedAt: Date;
  username: string | null;
};
