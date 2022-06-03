


function CalcularFatorial (palavra : string): number  {

    const tamanho = palavra.length
    let fatorial:number = 1
    for (let i:number = tamanho; i> 0 ; i --){
        fatorial = fatorial * i        
    }
   return fatorial
}

console.log(CalcularFatorial("colegio"))