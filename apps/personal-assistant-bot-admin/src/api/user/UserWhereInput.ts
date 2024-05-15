import { AutomationListRelationFilter } from "../automation/AutomationListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntegrationListRelationFilter } from "../integration/IntegrationListRelationFilter";
import { ReminderListRelationFilter } from "../reminder/ReminderListRelationFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type UserWhereInput = {
  automations?: AutomationListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  integrations?: IntegrationListRelationFilter;
  lastName?: StringNullableFilter;
  password?: StringNullableFilter;
  reminders?: ReminderListRelationFilter;
  tasks?: TaskListRelationFilter;
  username?: StringNullableFilter;
};
