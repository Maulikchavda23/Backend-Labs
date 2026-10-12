import React from 'react'

async function multipleDynamicRoute({params}:{params: Promise<{start : number, end:number}>}) {
    const {start , end} = await params
    const s = Number(start)
    const e = Number(end)

    let primes :number[] = [];


    for(let i=s;i<=e;i++){
        let prime = true;
        if(i<2){
            prime = false;
        }
        for(let j=2;j<i;j++){
            if(i % j == 0){
                prime =false;
                break;
            }
        }
        if(prime){
            primes.push(i);
        }
    }
  return (
    <div>
        <h1>Start : {s} , End : {e}</h1>
        <h1>primes : {primes.join(",")}</h1>
    </div>
  )
}

export default multipleDynamicRoute