import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AutomationUpdateInput = {
  actions?: InputJsonValue;
  trigger?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
  workflowName?: string | null;
};
