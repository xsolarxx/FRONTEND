import './Home.css';

export const Home = () => {
  return (
    <div>

      <div className="video-container">
        <video className="header-video" autoPlay loop muted>
          <source src="/wind.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> </div>

   
      <div className='home1'>
      <h1>Transformando el Futuro con Energía Renovable</h1>
      <h3>Conéctate con la Innovación Sostenible en xSolar</h3>
   </div>

      <p>
        As energias renováveis, incluindo solar, eólica, hidrelétrica, biomassa e
        geotérmica, oferecem uma alternativa ecologicamente correta para a produção de
        eletricidade. Ao aproveitar os recursos naturais disponíveis, podemos reduzir
        significativamente as emissões de gases de efeito estufa, combater as mudanças
        climáticas e garantir um futuro mais limpo para as gerações futuras.
      </p>
  <div>


      <h2>O Que Você Encontrará?</h2>
      <ul>
        <li>Descubra o Seu Parceiro Energético</li>
        <li>Encontre Empresas Renováveis</li>
        <li>Junte-se ao Debate Verde</li>
        <li>Participe do Nosso Fórum Energético</li>
        <li>Mantenha-se Atualizado com as Últimas Notícias</li>
      </ul>



      </div>
      <p>
        Explore nosso site para descobrir como você pode se envolver e contribuir para um
        futuro mais sustentável e limpo!
      </p>
    </div>
  
  );
};
