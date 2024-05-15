import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Automation = {
  actions: JsonValue;
  createdAt: Date;
  id: string;
  trigger?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
  workflowName: string | null;
};
