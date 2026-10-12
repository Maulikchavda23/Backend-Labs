import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /Lab27/api/users - Get all users
export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(
      {
        success: true,
        data: users,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Failed to fetch users",
      },
      { status: 500 }
    );
  }
}

// POST /Lab27/api/users - Create a user
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

    const { UserID, UserName, Password } = body;

    if (!UserID || !UserName || !Password) {
      return NextResponse.json(
        {
          success: false,
          message: "UserID, UserName, and Password are required",
        },
        { status: 400 }
      );
    }

    // Check for existing user with same UserID
    const existingUser = await prisma.user.findFirst({
      where: { UserID },
    });

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: `User with UserID '${UserID}' already exists`,
        },
        { status: 409 }
      );
    }

    let newUser;
    try {
      newUser = await prisma.user.create({
        data: { UserID, UserName, Password },
      });
    } catch (err: any) {
      await prisma.$runCommandRaw({
        insert: "User",
        documents: [{ UserID, UserName, Password }],
      });
      newUser = await prisma.user.findFirst({ where: { UserID } });
    }

    return NextResponse.json(
      {
        success: true,
        data: newUser,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Failed to create user",
      },
      { status: 500 }
    );
  }
}
