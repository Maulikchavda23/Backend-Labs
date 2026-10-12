import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface Params {
  params: Promise<{ id: string }>;
}

// GET /api/tasks/[id] - Get task by TaskID
export async function GET(request: Request, { params }: Params) {
  try {
    const { id } = await params;

    const task = await prisma.task.findFirst({
      where: { TaskID: id },
    });

    if (!task) {
      return NextResponse.json(
        {
          success: false,
          message: `Task with TaskID '${id}' not found`,
        },
        { status: 404 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: task,
      },
      { status: 200 },
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Failed to fetch task",
      },
      { status: 500 },
    );
  }
}

// PUT /api/tasks/[id] - Update task by TaskID
export async function PUT(request: Request, { params }: Params) {
  try {
    const { id } = await params;
    const body = await request.json().catch(() => null);

    if (!body || Object.keys(body).length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Request body cannot be empty",
        },
        { status: 400 },
      );
    }

    const existingTask = await prisma.task.findFirst({
      where: { TaskID: id },
    });

    if (!existingTask) {
      return NextResponse.json(
        {
          success: false,
          message: `Task with TaskID '${id}' not found`,
        },
        { status: 404 },
      );
    }

    const { TaskTitle, TaskDescription, IsCompleted, UserID } = body;

    if (IsCompleted !== undefined && typeof IsCompleted !== "boolean") {
      return NextResponse.json(
        {
          success: false,
          message: "IsCompleted must be a boolean",
        },
        { status: 400 },
      );
    }

    if (UserID) {
      const userExists = await prisma.user.findFirst({
        where: { UserID },
      });
      if (!userExists) {
        return NextResponse.json(
          {
            success: false,
            message: `User with UserID '${UserID}' does not exist`,
          },
          { status: 404 },
        );
      }
    }

    const updateData: any = {};
    if (TaskTitle !== undefined) updateData.TaskTitle = TaskTitle;
    if (TaskDescription !== undefined)
      updateData.TaskDescription = TaskDescription;
    if (IsCompleted !== undefined) updateData.IsCompleted = IsCompleted;
    if (UserID !== undefined) updateData.UserID = UserID;

    let updatedTask;
    try {
      updatedTask = await prisma.task.update({
        where: { id: existingTask.id },
        data: updateData,
      });
    } catch (err: any) {
      await prisma.$runCommandRaw({
        update: "Task",
        updates: [{ q: { TaskID: id }, u: { $set: updateData } }],
      });
      updatedTask = await prisma.task.findFirst({ where: { TaskID: id } });
    }

    return NextResponse.json(
      {
        success: true,
        data: updatedTask,
      },
      { status: 200 },
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Failed to update task",
      },
      { status: 500 },
    );
  }
}

// DELETE /api/tasks/[id] - Delete task by TaskID
export async function DELETE(request: Request, { params }: Params) {
  try {
    const { id } = await params;

    const existingTask = await prisma.task.findFirst({
      where: { TaskID: id },
    });

    if (!existingTask) {
      return NextResponse.json(
        {
          success: false,
          message: `Task with TaskID '${id}' not found`,
        },
        { status: 404 },
      );
    }

    try {
      await prisma.task.delete({
        where: { id: existingTask.id },
      });
    } catch (err: any) {
      await prisma.$runCommandRaw({
        delete: "Task",
        deletes: [{ q: { TaskID: id }, limit: 1 }],
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: `Task '${id}' deleted successfully`,
      },
      { status: 200 },
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Failed to delete task",
      },
      { status: 500 },
    );
  }
}
