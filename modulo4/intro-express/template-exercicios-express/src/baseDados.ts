type Usuarios = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string
}
export const usuarios: Usuarios[] =  [{
    id: 1,
    name: "Leanne Graham",
    phone: "493-170-9623",
    email: "Sincere@april.biz",
    website: "kale.biz",
}, {
    id: 2,
    name: "Diego Lima",
    phone: "493-854-1254",
    email: "newdev@april.biz",
    website: "frontend-dev.biz",
},{
    id: 3,
    name: "Murilo Terenciani",
    phone: "589-458-9623",
    email: "monitor@labenu.com.br",
    website: "fullstack-dev.biz",
},{
    id: 4,
    name: "Eduardo",
    phone: "041-998-5487",
    email: "fullstack_developer@com.br",
    website: "fullstack-dev.com.br",
},{
    id: 5,
    name: "Marcela",
    phone: "051-848-5487",
    email: "developer@com.br",
    website: "fullstack-dev.com.br",
}]

// achei mais pratico criar fora do array de usuarios. 
type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
  }    
  export const posts: Post[] =  [{
    userId: 1,
    id: 1,
    title: "estudante de backend",
    body: "Primeiro dia aprendendo sobre express e criação de APIs, tenho gostado muito, já gostava de usar API no front"  
  },{
    userId: 1,
    id: 2,
    title: "estudante",
    body: "Tenho me enrolado muito para entregar meus trabalhos. Mas tenho conseguido me virar bem"  
  },{
    userId: 1,
    id: 3,
    title: "estudante",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non ipsum libero. Nullam luctus placerat erat, in tincidunt enim condimentum at."  
  },{
    userId: 2,
    id: 4,
    title: "teste",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non ipsum libero. Nullam luctus placerat erat, in tincidunt enim condimentum at."  
  },{
    userId: 3,
    id: 5,
    title: "Texto lorem",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non ipsum libero. Nullam luctus placerat erat, in tincidunt enim condimentum at."  
  },{
    userId: 3,
    id: 6,
    title: "estudante",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non ipsum libero. Nullam luctus placerat erat, in tincidunt enim condimentum at."  
  }]    