import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReminderWhereInput = {
  id?: StringFilter;
  isRecurring?: BooleanNullableFilter;
  message?: StringNullableFilter;
  recurrencePattern?: "Option1";
  reminderTime?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
