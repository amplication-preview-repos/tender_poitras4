import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type IntegrationWhereInput = {
  apiKey?: StringNullableFilter;
  id?: StringFilter;
  integrationDetails?: JsonFilter;
  integrationName?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
