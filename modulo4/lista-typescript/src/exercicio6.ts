
type Cliente = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const cliente: Cliente[] =
[
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function  filtrarClientes (array:Cliente[]): Cliente[] {
	const contas = array.filter((cliente) => {
		const saldo = cliente.debitos.reduce((accumulator: number, number:number) => accumulator + number , 0 )
		const novoSaldo = cliente.saldoTotal-saldo
		cliente.saldoTotal = novoSaldo
		cliente.debitos = [] 
		return  cliente.saldoTotal < 0
	})
	return contas	
}

console.log(filtrarClientes(cliente))


