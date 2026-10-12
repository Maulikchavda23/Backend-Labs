import React from 'react'
import Link from "next/link";

async function studentpage({ params }: { params: Promise<{ id: String }> }) {
    const { id } = await params;
    const dataRaw = await fetch(
        "https://62d6c51451e6e8f06f12bd5d.mockapi.io/students/" + id,
    );
    const data = await dataRaw.json();
  return (
    <div>
      <Link href={"/student"}>Back</Link>
      <h1>Name: {data.StudentName}</h1>
      <img src={data.StudentImage} />
      <h1>StudentRollNo: {data.StudentRollNo}</h1>
      <h1>StudentMobileNumber: {data.StudentMobileNumber}</h1>
      <h1>StudentDepartment: {data.StudentDepartment}</h1>
    </div>
  )
}

export default studentpage