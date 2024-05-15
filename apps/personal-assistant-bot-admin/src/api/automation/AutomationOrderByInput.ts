import { SortOrder } from "../../util/SortOrder";

export type AutomationOrderByInput = {
  actions?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  trigger?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  workflowName?: SortOrder;
};
