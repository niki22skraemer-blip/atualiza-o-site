import usePageCss from "../../hooks/usePageCss";
import CounterSection from "../../components/CounterSection/CounterSection.jsx";

const drawbackCounters = [
  { target: 156, label: "Atos Concessórios realizados" },
  { target: 227, label: "Dólares salvos" },
  { target: 30, label: "Anos de experiência" },
];

export default function Drawback() {
  usePageCss("/Abas/Drawback/drawback.css");

  return (
    <main>
      {/* ==================== SEÇÃO 1 ==================== */}
      <section className="secao-1">
        <div className="titulo-1">
          <h1>Reduza Custos e Aumente sua Competitividade Internacional</h1>
        </div>

        <div className="subtitulo">
          <p>
            A Visonet ajuda empresas a identificar, planejar e aplicar corretamente os benefícios fiscais do Drawback
            para importações e exportações.
          </p>
        </div>
      </section>

      {/* ==================== COUNTER ABAIXO DA SEÇÃO 1 ==================== */}
      <CounterSection items={drawbackCounters} />

      {/* ==================== SEÇÃO 2 ==================== */}
      <section className="secao-2">
        <div className="titulos">
          <h1>O que é Drawback?</h1>
          <hr style={{ background: "#23317e", height: 4, border: 0, width: 230 }} />
        </div>

        <p>
          O Drawback é um regime que permite importar ou adquirir insumos no mercado interno com redução ou suspensão de
          tributos, desde que sejam usados na produção de itens destinados à exportação. Isso inclui isenção ou suspensão
          de impostos como <b>II</b>, <b>IPI</b>, <b>PIS</b>, <b>COFINS</b>, <b>AFRMM</b> e <b>ICMS</b>. Na prática, o
          Drawback reduz custos, melhora margens e aumenta a competitividade da empresa no mercado internacional.
        </p>
      </section>

      {/* ==================== SEÇÃO 3 ==================== */}
      <section className="secao-3">
        <div className="titulos">
          <h1>Por que escolher a Visonet?</h1>
          <hr style={{ background: "#23317e", height: 4, border: 0, width: 320 }} />
        </div>

        <p>
          Porque unimos expertise técnica, análise estratégica e atendimento personalizado para oferecer soluções
          eficientes e seguras no Comércio Exterior. Nossa equipe acompanha cada etapa com precisão, garantindo economia,
          otimização e total conformidade nas operações da sua empresa.
        </p>
      </section>

      {/* ==================== SEÇÃO 4 ==================== */}
      <section className="secao-4">
        <div className="titulos">
          <h1>O que a Visonet oferece?</h1>
          <hr style={{ background: "#23317e", height: 4, border: 0, width: 290 }} />
        </div>

        <div className="container-balao">
          <div className="balao">
            <p>Mapeamento detalhado do fluxo produtivo</p>
          </div>

          <div className="balao">
            <p>Identificação e validação das oportunidades de Drawback</p>
          </div>

          <div className="balao">
            <p>Cálculo técnico e projeção de benefícios</p>
          </div>

          <div className="balao">
            <p>Planejamento e estruturação do Ato Concessório</p>
          </div>

          <div className="balao">
            <p>Otimização de Atos existentes</p>
          </div>

          <div className="balao">
            <p>Suporte durante todo o processo</p>
          </div>
        </div>
      </section>

      {/* ==================== PARA QUEM ==================== */}
      <section className="para-quem">
        <div className="titulos">
          <h1>Para quem é?</h1>
          <hr style={{ background: "#23317e", height: 4, border: 0, width: 160 }} />
        </div>

        <p>
          Este conteúdo é para empresas que exportam ou desejam exportar e buscam reduzir custos utilizando os benefícios
          do Drawback. É ideal para quem importa ou compra insumos no mercado interno, quer pagar menos tributos e aumentar
          a competitividade. Se você deseja uma orientação clara, estratégica e gratuita para entender e aproveitar melhor
          as oportunidades que o Drawback pode oferecer, esta oportunidade foi feita para você.
        </p>
      </section>

      {/* ==================== SEÇÃO 5 ==================== */}
      <section className="secao-5">
        <div className="titulos">
          <h1>Nossos parceiros:</h1>
          <hr style={{ background: "#23317e", height: 4, border: 0, width: 210 }} />
        </div>

        <div className="carrossel">
          <div className="carrossel-track">
            <div className="carrossel-group">
              <div className="card">
                <img src="/Midias/drawback/dass-logo.png" alt="DASS" />
              </div>
              <div className="card">
                <img src="/Midias/drawback/celsus-logo.png" alt="Celsus" />
              </div>
              <div className="card">
                <img src="/Midias/drawback/fitesa-logo.jpg" alt="Fitesa" />
              </div>
              <div className="card">
                <img src="/Midias/drawback/fueltech-logo.png" alt="FuelTech" />
              </div>
              <div className="card">
                <img src="/Midias/drawback/globus-logo.png" alt="Globus" />
              </div>
              <div className="card">
                <img src="/Midias/drawback/irwin-logo.png" alt="Irwin" />
              </div>
              <div className="card">
                <img src="/Midias/drawback/innova-logo.jpg" alt="Innova" />
              </div>
              <div className="card">
                <img src="/Midias/drawback/taurus-logo.png" alt="Taurus" />
              </div>
            </div>

            <div className="carrossel-group">
              <div className="card">
                <img src="/Midias/drawback/dass-logo.png" alt="DASS" />
              </div>
              <div className="card">
                <img src="/Midias/drawback/celsus-logo.png" alt="Celsus" />
              </div>
              <div className="card">
                <img src="/Midias/drawback/fitesa-logo.jpg" alt="Fitesa" />
              </div>
              <div className="card">
                <img className="logo-fueltech" src="/Midias/drawback/fueltech-logo.png" alt="FuelTech" />
              </div>
              <div className="card">
                <img src="/Midias/drawback/globus-logo.png" alt="Globus" />
              </div>
              <div className="card">
                <img src="/Midias/drawback/irwin-logo.png" alt="Irwin" />
              </div>
              <div className="card">
                <img src="/Midias/drawback/innova-logo.jpg" alt="Innova" />
              </div>
              <div className="card">
                <img src="/Midias/drawback/taurus-logo.png" alt="Taurus" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SEÇÃO 6 ==================== */}
      <section className="secao-6">
        <div className="titulos">
          <h1>Entre em contato</h1>
          <hr style={{ background: "#23317e", height: 4, border: 0, width: 230 }} />
        </div>

        <div className="fale-conosco">
          <div className="conteudo-container">
            <p>FALE COM A VISONET</p>

            <div className="contatos">
              <div className="contato-1">
                <img src="/Icons/ic_call-20-outline-white.svg" alt="" />
                <a href="tel:+5551993753092">(51) 99375-3092</a>
              </div>

              <div className="contato-2">
                <img src="/Icons/ic_mail-20-outline-white.svg" alt="" />
                <a href="mailto:contato@visonet.net">contato@visonet.net</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
