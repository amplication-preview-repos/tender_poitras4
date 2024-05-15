import { AutomationWhereInput } from "./AutomationWhereInput";
import { AutomationOrderByInput } from "./AutomationOrderByInput";

export type AutomationFindManyArgs = {
  where?: AutomationWhereInput;
  orderBy?: Array<AutomationOrderByInput>;
  skip?: number;
  take?: number;
};
