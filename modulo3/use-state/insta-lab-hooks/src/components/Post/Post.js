import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'
import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {
  const [curtido, SetCurtido] = useState(false)
  const [numeroCurtidas, SetNumeroCurtidas] = useState(0)
  const [comentando, SetComentando] = useState(false)
  const [numeroComentarios, SetNumeroComentarios] = useState(0)
  const [comentarios, SetComentarios] = useState([])

  const onClickCurtida = () => {
    if (curtido) {
      SetCurtido(!curtido)
      SetNumeroCurtidas(numeroCurtidas - 1)
    } else {
      SetCurtido(!curtido)
      SetNumeroCurtidas(numeroCurtidas + 1)
    }

  };

  const onClickComentario = () => {
    SetComentando(!comentando)
  };

  const enviarComentario = (comentario) => {
    const listaDeComentarios = [...comentarios, comentario]
    SetComentarios(listaDeComentarios)
    SetComentando(false)
    SetNumeroComentarios(numeroComentarios + 1)
  }

  const iconeCurtida = curtido ? (iconeCoracaoPreto) : (iconeCoracaoBranco)


  const caixaDeComentario = comentando ? (
    <SecaoComentario enviarComentario={enviarComentario} />)
    : (comentarios.map(comentario => {
      return (
        <CommentContainer>
          <p>{comentario}</p>
        </CommentContainer>
      )
    })
    )

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'} />

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {caixaDeComentario}
    </PostContainer>
  )

}

export default Post