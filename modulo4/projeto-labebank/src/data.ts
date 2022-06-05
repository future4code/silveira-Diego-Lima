
export type Trasacoes = {
    valor: number,
    data: Date,
    descricao: string
}
export type User = {
    nome: string,
    CPF: string,
    dataNascimento: Date,
    saldo: number
    extrato : Trasacoes[]
  }

  // Mock simulando um array de usuários no Banco de Dados
 export let users: User[] = []