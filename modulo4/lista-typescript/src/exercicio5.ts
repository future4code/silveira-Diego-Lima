
type Pessoa = {
    name : string,
    email: string,
    role: string
}

const pessoa: Pessoa[] =
 [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 


function filtarEmails (array: Pessoa[]): string[] {

   const filtro = array.filter((pessoa) => {                
        return pessoa.email && pessoa.role == 'admin'
       
    }) 
    const novo = filtro.map((pessoa) => {
                return pessoa.email
    })    
    return  novo


}
console.log(filtarEmails(pessoa))
