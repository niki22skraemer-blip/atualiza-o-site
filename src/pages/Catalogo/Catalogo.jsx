import usePageCss from "../../hooks/usePageCss";

export default function Catalogo() {
  usePageCss("/Abas/Catalogo/catalogo.css");

  return (
    <main>
      {/* ======================== SEÇÃO 1 ======================== */}
      <section className="secao-1">
        <div className="titulos-1">
          <h1>
            Apresentando o <br />
            Catálogo de Produtos
          </h1>
          <hr style={{ background: "#23317e", height: 4, border: 0, width: 260 }} />
        </div>

        <p>
          O Catálogo de Produtos é uma funcionalidade do Novo Processo de Importação (NPI) e faz parte do novo módulo do
          Portal Único Siscomex, totalmente integrado à DUIMP. Ele reúne o cadastro de produtos importados e dos
          Operadores Estrangeiros, que são informações essenciais para a elaboração correta e padronizada da DUIMP. Com
          essa ferramenta, as empresas conseguem organizar previamente seus dados, garantindo mais agilidade, precisão e
          conformidade no processo de importação.
        </p>
      </section>

      {/* ======================== SEÇÃO 2 ======================== */}
      <section className="secao-2">
        <div className="titulos">
          <h1>Como funciona?</h1>
          <hr style={{ background: "#23317e", height: 4, border: 0, width: 200 }} />
        </div>

        <p>
          O Catálogo de Produtos funciona como uma base de dados centralizada no Portal Único Siscomex, onde a empresa
          registra previamente todas as informações relacionadas aos produtos que pretende importar. Nesse cadastro são
          incluídos detalhes como descrição, NCM, características técnicas, produtor estrangeiro e exportador, que são
          definidos como Operadores Estrangeiros. Após o produto estar cadastrado no Catálogo, essas informações podem
          ser reutilizadas automaticamente na elaboração da DUIMP, evitando retrabalho, eliminando erros e garantindo
          padronização. Assim, o Catálogo otimiza o processo de importação ao permitir que os dados fiquem prontos antes
          da operação, tornando o registro mais rápido, seguro e alinhado às exigências do Novo Processo de Importação.
        </p>
      </section>

      {/* ======================== SEÇÃO 3 (CTA) ======================== */}
      <section className="secao-3">
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
