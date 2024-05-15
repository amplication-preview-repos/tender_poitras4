import { AutomationCreateNestedManyWithoutUsersInput } from "./AutomationCreateNestedManyWithoutUsersInput";
import { IntegrationCreateNestedManyWithoutUsersInput } from "./IntegrationCreateNestedManyWithoutUsersInput";
import { ReminderCreateNestedManyWithoutUsersInput } from "./ReminderCreateNestedManyWithoutUsersInput";
import { TaskCreateNestedManyWithoutUsersInput } from "./TaskCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  automations?: AutomationCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  integrations?: IntegrationCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  password?: string | null;
  reminders?: ReminderCreateNestedManyWithoutUsersInput;
  tasks?: TaskCreateNestedManyWithoutUsersInput;
  username?: string | null;
};
