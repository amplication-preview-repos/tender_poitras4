import { AutomationUpdateManyWithoutUsersInput } from "./AutomationUpdateManyWithoutUsersInput";
import { IntegrationUpdateManyWithoutUsersInput } from "./IntegrationUpdateManyWithoutUsersInput";
import { ReminderUpdateManyWithoutUsersInput } from "./ReminderUpdateManyWithoutUsersInput";
import { TaskUpdateManyWithoutUsersInput } from "./TaskUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  automations?: AutomationUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  integrations?: IntegrationUpdateManyWithoutUsersInput;
  lastName?: string | null;
  password?: string | null;
  reminders?: ReminderUpdateManyWithoutUsersInput;
  tasks?: TaskUpdateManyWithoutUsersInput;
  username?: string | null;
};
