import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface Params {
  params: Promise<{ id: string }>;
}

// GET /Lab27/api/users/[id] - Get user by UserID
export async function GET(request: Request, { params }: Params) {
  try {
    const { id } = await params;

    const user = await prisma.user.findFirst({
      where: { UserID: id },
    });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: `User with UserID '${id}' not found`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: user,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Failed to fetch user",
      },
      { status: 500 }
    );
  }
}

// PUT /Lab27/api/users/[id] - Update user by UserID
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
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findFirst({
      where: { UserID: id },
    });

    if (!existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: `User with UserID '${id}' not found`,
        },
        { status: 404 }
      );
    }

    const { UserName, Password } = body;

    const updateData: any = {};
    if (UserName !== undefined) updateData.UserName = UserName;
    if (Password !== undefined) updateData.Password = Password;

    let updatedUser;
    try {
      updatedUser = await prisma.user.update({
        where: { id: existingUser.id },
        data: updateData,
      });
    } catch (err: any) {
      await prisma.$runCommandRaw({
        update: "User",
        updates: [{ q: { UserID: id }, u: { $set: updateData } }],
      });
      updatedUser = await prisma.user.findFirst({ where: { UserID: id } });
    }

    return NextResponse.json(
      {
        success: true,
        data: updatedUser,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Failed to update user",
      },
      { status: 500 }
    );
  }
}

// DELETE /Lab27/api/users/[id] - Delete user by UserID
export async function DELETE(request: Request, { params }: Params) {
  try {
    const { id } = await params;

    const existingUser = await prisma.user.findFirst({
      where: { UserID: id },
    });

    if (!existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: `User with UserID '${id}' not found`,
        },
        { status: 404 }
      );
    }

    try {
      await prisma.user.delete({
        where: { id: existingUser.id },
      });
    } catch (err: any) {
      await prisma.$runCommandRaw({
        delete: "User",
        deletes: [{ q: { UserID: id }, limit: 1 }],
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: `User '${id}' deleted successfully`,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Failed to delete user",
      },
      { status: 500 }
    );
  }
}
