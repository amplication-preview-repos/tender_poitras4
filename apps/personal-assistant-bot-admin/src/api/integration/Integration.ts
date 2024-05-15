import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Integration = {
  apiKey: string | null;
  createdAt: Date;
  id: string;
  integrationDetails: JsonValue;
  integrationName: string | null;
  updatedAt: Date;
  user?: User | null;
};
