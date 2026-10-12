import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/tasks - Get all tasks
export async function GET() {
  try {
    const tasks = await prisma.task.findMany();
    return NextResponse.json(
      {
        success: true,
        data: tasks,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Failed to fetch tasks",
      },
      { status: 500 }
    );
  }
}

// POST /api/tasks - Create a task
export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);

    if (!body || Object.keys(body).length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Request body cannot be empty",
        },
        { status: 400 }
      );
    }

    const { TaskID, TaskTitle, TaskDescription, IsCompleted, UserID } = body;

    if (
      !TaskID ||
      !TaskTitle ||
      !TaskDescription ||
      IsCompleted === undefined ||
      !UserID
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "TaskID, TaskTitle, TaskDescription, IsCompleted, and UserID are required",
        },
        { status: 400 }
      );
    }

    if (typeof IsCompleted !== "boolean") {
      return NextResponse.json(
        {
          success: false,
          message: "IsCompleted must be a boolean",
        },
        { status: 400 }
      );
    }

    // Check if UserID exists in database
    const userExists = await prisma.user.findFirst({
      where: { UserID },
    });

    if (!userExists) {
      return NextResponse.json(
        {
          success: false,
          message: `User with UserID '${UserID}' does not exist`,
        },
        { status: 404 }
      );
    }

    // Check for duplicate TaskID
    const existingTask = await prisma.task.findFirst({
      where: { TaskID },
    });

    if (existingTask) {
      return NextResponse.json(
        {
          success: false,
          message: `Task with TaskID '${TaskID}' already exists`,
        },
        { status: 409 }
      );
    }

    const taskData = {
      TaskID,
      TaskTitle,
      TaskDescription,
      IsCompleted,
      UserID,
    };

    let newTask;
    try {
      newTask = await prisma.task.create({
        data: taskData,
      });
    } catch (err: any) {
      await prisma.$runCommandRaw({
        insert: "Task",
        documents: [taskData],
      });
      newTask = await prisma.task.findFirst({ where: { TaskID } });
    }

    return NextResponse.json(
      {
        success: true,
        data: newTask,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Failed to create task",
      },
      { status: 500 }
    );
  }
}
