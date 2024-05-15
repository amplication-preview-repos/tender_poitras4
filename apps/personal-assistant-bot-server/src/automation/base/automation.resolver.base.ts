/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Automation } from "./Automation";
import { AutomationCountArgs } from "./AutomationCountArgs";
import { AutomationFindManyArgs } from "./AutomationFindManyArgs";
import { AutomationFindUniqueArgs } from "./AutomationFindUniqueArgs";
import { CreateAutomationArgs } from "./CreateAutomationArgs";
import { UpdateAutomationArgs } from "./UpdateAutomationArgs";
import { DeleteAutomationArgs } from "./DeleteAutomationArgs";
import { User } from "../../user/base/User";
import { AutomationService } from "../automation.service";
@graphql.Resolver(() => Automation)
export class AutomationResolverBase {
  constructor(protected readonly service: AutomationService) {}

  async _automationsMeta(
    @graphql.Args() args: AutomationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Automation])
  async automations(
    @graphql.Args() args: AutomationFindManyArgs
  ): Promise<Automation[]> {
    return this.service.automations(args);
  }

  @graphql.Query(() => Automation, { nullable: true })
  async automation(
    @graphql.Args() args: AutomationFindUniqueArgs
  ): Promise<Automation | null> {
    const result = await this.service.automation(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Automation)
  async createAutomation(
    @graphql.Args() args: CreateAutomationArgs
  ): Promise<Automation> {
    return await this.service.createAutomation({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Automation)
  async updateAutomation(
    @graphql.Args() args: UpdateAutomationArgs
  ): Promise<Automation | null> {
    try {
      return await this.service.updateAutomation({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Automation)
  async deleteAutomation(
    @graphql.Args() args: DeleteAutomationArgs
  ): Promise<Automation | null> {
    try {
      return await this.service.deleteAutomation(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: Automation): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
