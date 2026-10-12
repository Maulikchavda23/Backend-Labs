import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface Params {
  params: Promise<{ userId: string }>;
}

// GET /api/tasks/user/[userId] - Get all tasks for a specific UserID
export async function GET(request: Request, { params }: Params) {
  try {
    const { userId } = await params;

    // Check if user exists using findFirst (since UserID is custom scalar)
    const userExists = await prisma.user.findFirst({
      where: { UserID: userId },
    });

    if (!userExists) {
      return NextResponse.json(
        {
          success: false,
          message: `User with UserID '${userId}' not found`,
        },
        { status: 404 }
      );
    }

    const tasks = await prisma.task.findMany({
      where: { UserID: userId },
    });

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
        message: error?.message || "Failed to fetch tasks for user",
      },
      { status: 500 }
    );
  }
}
