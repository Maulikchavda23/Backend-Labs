import React from "react";
import Link from "next/link";

async function stupage() {
  const dataRaw = await fetch(
    "https://62d6c51451e6e8f06f12bd5d.mockapi.io/students",
  );
  const data = await dataRaw.json();
  console.log(data);
  return (
    <div>
      {data.map((stu: any) => {
        return (
          <h1>
            <Link href={"/student/" + stu.id}>{stu.StudentName}</Link>
          </h1>
        );
      })}
    </div>
  );
}

export default stupage;
