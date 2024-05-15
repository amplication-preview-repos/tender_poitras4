import * as graphql from "@nestjs/graphql";
import { AutomationResolverBase } from "./base/automation.resolver.base";
import { Automation } from "./base/Automation";
import { AutomationService } from "./automation.service";

@graphql.Resolver(() => Automation)
export class AutomationResolver extends AutomationResolverBase {
  constructor(protected readonly service: AutomationService) {
    super(service);
  }
}
