import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AutomationCreateInput = {
  actions?: InputJsonValue;
  trigger?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
  workflowName?: string | null;
};
