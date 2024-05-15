import { Module } from "@nestjs/common";
import { AutomationModuleBase } from "./base/automation.module.base";
import { AutomationService } from "./automation.service";
import { AutomationController } from "./automation.controller";
import { AutomationResolver } from "./automation.resolver";

@Module({
  imports: [AutomationModuleBase],
  controllers: [AutomationController],
  providers: [AutomationService, AutomationResolver],
  exports: [AutomationService],
})
export class AutomationModule {}
