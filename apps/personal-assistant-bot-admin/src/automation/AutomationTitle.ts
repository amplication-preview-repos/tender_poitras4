import { Automation as TAutomation } from "../api/automation/Automation";

export const AUTOMATION_TITLE_FIELD = "workflowName";

export const AutomationTitle = (record: TAutomation): string => {
  return record.workflowName?.toString() || String(record.id);
};
