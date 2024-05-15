/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ReminderService } from "../reminder.service";
import { ReminderCreateInput } from "./ReminderCreateInput";
import { Reminder } from "./Reminder";
import { ReminderFindManyArgs } from "./ReminderFindManyArgs";
import { ReminderWhereUniqueInput } from "./ReminderWhereUniqueInput";
import { ReminderUpdateInput } from "./ReminderUpdateInput";

export class ReminderControllerBase {
  constructor(protected readonly service: ReminderService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Reminder })
  async createReminder(
    @common.Body() data: ReminderCreateInput
  ): Promise<Reminder> {
    return await this.service.createReminder({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        isRecurring: true,
        message: true,
        recurrencePattern: true,
        reminderTime: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Reminder] })
  @ApiNestedQuery(ReminderFindManyArgs)
  async reminders(@common.Req() request: Request): Promise<Reminder[]> {
    const args = plainToClass(ReminderFindManyArgs, request.query);
    return this.service.reminders({
      ...args,
      select: {
        createdAt: true,
        id: true,
        isRecurring: true,
        message: true,
        recurrencePattern: true,
        reminderTime: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Reminder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async reminder(
    @common.Param() params: ReminderWhereUniqueInput
  ): Promise<Reminder | null> {
    const result = await this.service.reminder({
      where: params,
      select: {
        createdAt: true,
        id: true,
        isRecurring: true,
        message: true,
        recurrencePattern: true,
        reminderTime: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Reminder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateReminder(
    @common.Param() params: ReminderWhereUniqueInput,
    @common.Body() data: ReminderUpdateInput
  ): Promise<Reminder | null> {
    try {
      return await this.service.updateReminder({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          isRecurring: true,
          message: true,
          recurrencePattern: true,
          reminderTime: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Reminder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteReminder(
    @common.Param() params: ReminderWhereUniqueInput
  ): Promise<Reminder | null> {
    try {
      return await this.service.deleteReminder({
        where: params,
        select: {
          createdAt: true,
          id: true,
          isRecurring: true,
          message: true,
          recurrencePattern: true,
          reminderTime: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
