import React from 'react'

async function dynamicRoute({params}:{params: Promise<{id : string}>}) {
    const {id} = await params;
  return (
    <h1>User Id: {id}</h1>
  )
}

export default dynamicRoute