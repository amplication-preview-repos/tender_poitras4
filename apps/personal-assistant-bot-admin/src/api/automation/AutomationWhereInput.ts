import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AutomationWhereInput = {
  actions?: JsonFilter;
  id?: StringFilter;
  trigger?: "Option1";
  user?: UserWhereUniqueInput;
  workflowName?: StringNullableFilter;
};
