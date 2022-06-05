type Afazeres ={
  userId: string,
  id: number,
  title: string,
  completed: string| boolean,
}

export const afazeres: Afazeres[] = [
  {
    userId: "1",
    id: 1,
    title: "realizar todos os exercicios do dia",
    completed: "false",
  },{
    userId: "1",
    id: 2,
    title: "ir para academia",
    completed: "true",
  },{
    userId: "1",
    id: 3,
    title: "assistir aula de express",
    completed: "true",
  }
]  