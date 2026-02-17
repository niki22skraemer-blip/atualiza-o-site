import "./Mission.css";

export default function Mission() {
  return (
    <section className="mission-container">
      <div className="mission-card">
        <div className="mission-image">
          <img src="/Midias/sobre/missão.png" alt="Missão" />
        </div>
        <div className="mission-detail">
          <h3>MISSÃO</h3>
          <p>
            Promover serviços na área de Comércio Exterior e Produtos, contribuindo para o fortalecimento da base
            exportadora brasileira, para a entrada de empresas em novos mercados e para a disseminação da cultura de
            Comércio Internacional. Além disso, buscamos cooperar para o aumento dos valores negociados globalmente,
            impulsionando o desenvolvimento econômico do país.
          </p>
        </div>
      </div>

      <div className="mission-card">
        <div className="mission-image">
          <img src="/Midias/sobre/visão.png" alt="Visão" />
        </div>
        <div className="mission-detail">
          <h3>VISÃO</h3>
          <p>
            Proporcionar às empresas brasileiras serviços, ensino e tecnologia para impulsionar o Comércio
            Internacional, contribuindo para o desenvolvimento sustentável e competitivo do nosso país. Juntando
            também a capacidade de automatização da Inteligência Artificial.
          </p>
        </div>
      </div>

      <div className="mission-card">
        <div className="mission-image">
          <img src="/Midias/sobre/valores.png" alt="Valores" />
        </div>
        <div className="mission-detail">
          <h3>VALORES</h3>
          <p>
            Profissionalismo<br />
            Honestidade<br />
            Agilidade<br />
            Competência<br />
            Presteza<br />
            Compliance
          </p>
        </div>
      </div>
    </section>
  );
}
