import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno.js/CardPequeno';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQExPnbbENq8rQ/profile-displayphoto-shrink_200_200/0/1637580875550?e=1653523200&v=beta&t=ifTfaRcBhCje9l5-3D3VqcWYy7ap-5uF9fFPPticMa8" 
          nome="Diego" 
          descricao="Oi, eu sou o Diego Lima. Sou aluno da Labenu. Estou estudando React e pretendo atuar na area, gosto muito de tecnologia, aprender coisas novos."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/929/929750.png" 
          texto="Ver mais"
        />
      </div>
      <CardPequeno
        imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHlFQIOEH7Ntto0Gq1D7pHISoyx3ErU9gRNA&usqp=CAU"
        nome="Email :"
        descricao="diego.eduardo@lima.com"
      />
      <CardPequeno
        imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW5Y3_tuHbxx5_EcYXUAIHvWMPqMDqd4vu3w&usqp=CAU"
        nome="Endereço :"
        descricao="Rua Eduardo de Lima"
      />
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQHYV5mfqZ2v1g/company-logo_100_100/0/1628119777901?e=1655942400&v=beta&t=5tipQyNvv17oLniXKSGIh1nFSlE3SUrGQPpIIPkAK0I" 
          nome="EQI Investimentos" 
          descricao="Prospecção ativa de novos clientes, com abertura de contas e acompanhamento para alinhar objetivos com planos e metas." 
        />
        
        <CardGrande 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt0yxYiNrTp83n8gndoqHBlZFREmd44yb2Sw&usqp=CAU" 
          nome="Vivo" 
          descricao="Vendas internas de serviços da empresa" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
        <ImagemButton
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Dhtp3vCWBT3080aAf7jNNqn5kofZ_jzPHO7k6SG5BVFoQYIhI5AHeCZsAV33ml8mOQY&usqp=CAU"
          texto="Linkedin"
        />  
      </div>
    </div>
  );
}

export default App;
