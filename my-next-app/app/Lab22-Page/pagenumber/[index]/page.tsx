import React from 'react'

async function pagination({params}:{params: Promise<{id : string}>}) {
  const {id} = await params;
  for()
  return (
    <h1>totalpage : {id}</h1>
  )
}

export default pagination