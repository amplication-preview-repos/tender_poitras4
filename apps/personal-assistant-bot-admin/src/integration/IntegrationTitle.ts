import { Integration as TIntegration } from "../api/integration/Integration";

export const INTEGRATION_TITLE_FIELD = "integrationName";

export const IntegrationTitle = (record: TIntegration): string => {
  return record.integrationName?.toString() || String(record.id);
};
