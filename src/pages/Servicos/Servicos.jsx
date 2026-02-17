import usePageCss from "../../hooks/usePageCss";

export default function Servicos() {
  usePageCss("/Abas/Servicos/servicos.css");

  return (
    <main>
      {/* ============================= SEÇÃO 1 ============================= */}
      <section className="secao-1">
        <div className="titulo-1">
          <h1>
            Inteligência Operacional que transforma a sua gestão no Comércio Exterior
          </h1>
        </div>

        <div className="subtitulo">
          <p>
            A Visonet simplifica processos, reduz burocracia e entrega suporte 
            estratégico para que sua empresa opere com segurança e eficiência 
            nas importações, exportações e regimes especiais.
          </p>
        </div>
      </section>

      {/* ============================= SEÇÃO 2 ============================= */}
      <section className="secao-2">
        <div className="texto">
    
          <p>
           Com mais de 30 anos de expertise e profundo domínio da legislação 
           aduaneira e tributária, a Visonet	 presta suporte estratégico completo 
           que abrange desde a gestão de cadastros de produtos no SISCOMEX até o 
           cumprimento de obrigações acessórias digitais. Nossas soluções incluem 
           programas de recuperação de tributos, elaboração de declarações eletrônicas 
           e gestão de certificados de origem, garantindo total conformidade, rastreabilidade 
           e alinhamento às normas vigentes em todas as etapas das operações de Comércio Exterior.
          </p>
        </div>

        <img src="/Midias/servicos/foto-1.webp" alt="Serviços Visonet" />
      </section>

      {/* ============================= SEÇÃO 3 ============================= */}
      {/* <section className="secao-3">
        <img src="/Midias/servicos/foto-2.jpg" alt="Soluções em Comércio Exterior" />

        <div className="texto">
          <p>
            Nossos serviços abrangem desde o apoio ao cadastro e gestão de produtos no SISCOMEX, passando por soluções
            voltadas a programas de recuperação de tributos, cumprimento de obrigações acessórias digitais e elaboração
            de declarações eletrônicas de exportação relacionadas às operações de comércio exterior e gestão de
            certificados utilizados na comprovação de origem das mercadorias. Tudo isso sempre com foco em conformidade,
            rastreabilidade e alinhamento às normas vigentes.
          </p>
        </div>
      </section> */}

      {/* ============================= SEÇÃO 4 ============================= */}
      {/* <section className="secao-4">
        <div className="titulos">
          <h1>O que a Visonet oferece?</h1>
          <hr style={{ background: "#23317e", height: 4, border: 0, width: 290 }} />
        </div>

        <p>
          Mais do que ferramentas, entregamos tranquilidade operacional: reduzimos riscos de autuações, evitamos
          retrabalho, organizamos informações críticas e ajudamos sua equipe a ter confiança em cada etapa do processo.
          Esta página reúne parte dessas soluções especializadas, que seguem em constante evolução para acompanhar as
          mudanças do cenário regulatório e as novas necessidades do mercado.
        </p>
      </section> */}

      {/* ============================= SEÇÃO 5 ============================= */}
<section className="secao-5">
  <div className="titulos">
    <h1>Nossos Serviços</h1>
    <hr style={{ background: "#23317e", height: 4, border: 0, width: 200, margin: "10px auto" }} />
  </div>

  <div className="container-geral">
    <div className="container-sistema">

      {/* CARD 1 */}
      <div className="sistema">
        <a href="/reintegra">
          <h3>REINTEGRA</h3>
          <p className="descricao">
            Programa da Receita Federal que devolve às empresas exportadoras parte dos tributos pagos ao longo da
            cadeia produtiva, como forma de incentivar as exportações brasileiras.
          </p>
          <span className="p-2">Saiba mais</span>
        </a>
      </div>

      {/* CARD 2 */}
      <div className="sistema">
        <a href="/sped">
          <h3>SPED para Exportação</h3>
          <p className="descricao">
            Sistema da Receita Federal que unifica e digitaliza a escrituração fiscal e contábil das empresas,
            substituindo documentos em papel por arquivos eletrônicos.
          </p>
          <span className="p-2">Saiba mais</span>
        </a>
      </div>

      {/* CARD 3 */}
      <div className="sistema">
        <a href="/catalogo">
          <h3>CATÁLOGO DE PRODUTOS</h3>
          <p className="descricao">
            Serviço relacionado a catalogação de produtos importados no portal Siscomex, que serão atrelados a
            Declaração Única de Importação (DUIMP) e LPCO.
          </p>
          <span className="p-2">Saiba mais</span>
        </a>
      </div>

    </div>
  </div>
</section>

      {/* ============================= SEÇÃO 6 ============================= */}
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
