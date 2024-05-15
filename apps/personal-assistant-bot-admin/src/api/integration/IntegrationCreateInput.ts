import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type IntegrationCreateInput = {
  apiKey?: string | null;
  integrationDetails?: InputJsonValue;
  integrationName?: string | null;
  user?: UserWhereUniqueInput | null;
};
