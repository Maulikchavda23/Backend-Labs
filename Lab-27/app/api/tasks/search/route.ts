import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/tasks/search?query=... - Search tasks in TaskTitle or TaskDescription
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query");

    if (!query || query.trim() === "") {
      const allTasks = await prisma.task.findMany();
      return NextResponse.json(
        {
          success: true,
          data: allTasks,
        },
        { status: 200 }
      );
    }

    const tasks = await prisma.task.findMany({
      where: {
        OR: [
          { TaskTitle: { contains: query, mode: "insensitive" } },
          { TaskDescription: { contains: query, mode: "insensitive" } },
        ],
      },
    });

    if (tasks.length === 0) {
      return NextResponse.json(
        {
          success: true,
          data: [],
          message: "No tasks found",
        },
        { status: 200 }
      );
    }

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
        message: error?.message || "Failed to search tasks",
      },
      { status: 500 }
    );
  }
}
