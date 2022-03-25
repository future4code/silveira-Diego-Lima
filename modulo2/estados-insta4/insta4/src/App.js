import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = { 
    usuario: [
      {nomeUsuario: "paulinha" ,fotoUsuario: "https://picsum.photos/50/50", fotoUsuario: "https://picsum.photos/200/150"},
      {nomeUsuario: "Diego Lima" ,fotoUsuario: "https://pbs.twimg.com/profile_images/1174510816730734592/JcV9qesz_400x400.jpg", fotoUsuario: "https://picsum.photos/id/1/200/300"},
      {nomeUsuario: "Eduardo Lima" ,fotoUsuario: "https://media-exp1.licdn.com/dms/image/C4D03AQExPnbbENq8rQ/profile-displayphoto-shrink_800_800/0/1637580875550?e=1653523200&v=beta&t=SjKA0-0AcqQ5nJE09xRqKJMoU8cOHhl0vNGk5amTENg", fotoUsuario:"https://picsum.photos/200/300/?blur=2"}
    ],
    nomeUsuario: "",
    fotoUsuario:"",
    fotoPost:"",
     
  }



  render() {
    const listaDeComponentes =this.state.usuario.map((post, index) =>{
      
      {post.usuario.nomeUsuario}
      {post.usuario.fotoUsuario}
      {post.usuario.fotoPost}      
      
    })
    return (
      <MainContainer>

      {listaDeComponentes}

      </MainContainer>

        /* <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Diego Lima'}
          fotoUsuario={'https://pbs.twimg.com/profile_images/1174510816730734592/JcV9qesz_400x400.jpg'}
          fotoPost={'https://picsum.photos/id/1/200/300'}
        />
        <Post
          nomeUsuario={'Eduardo Lima'}
          fotoUsuario={'https://media-exp1.licdn.com/dms/image/C4D03AQExPnbbENq8rQ/profile-displayphoto-shrink_800_800/0/1637580875550?e=1653523200&v=beta&t=SjKA0-0AcqQ5nJE09xRqKJMoU8cOHhl0vNGk5amTENg'}
          fotoPost={'https://picsum.photos/200/300/?blur=2'}
        /> */
      
    );
  }
}

export default App;
