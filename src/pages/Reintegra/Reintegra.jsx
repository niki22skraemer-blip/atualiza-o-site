import usePageCss from "../../hooks/usePageCss";

export default function Reintegra() {
  usePageCss("/Abas/Reintegra/reintegra.css");

  return (
    <main>
      {/* ======================== SEÇÃO 1 ======================== */}
      <section className="secao-1">
        <div className="titulos-1">
          <h1>Apresentando o REINTEGRA</h1>
          <hr style={{ background: "#23317e", height: 4, border: 0, width: 320 }} />
        </div>

        <p>
          O REINTEGRA é um programa instituído pelo Governo Federal com o objetivo de estimular as exportações brasileiras
          por meio da restituição parcial de tributos incidentes ao longo da cadeia produtiva. O mecanismo possibilita às
          empresas exportadoras a recuperação de valores incorporados ao custo de produção dos bens exportados,
          contribuindo diretamente para o aumento da competitividade no Mercado Internacional.
          <br />
          <br />
          O REINTEGRA faz parte do conjunto de instrumentos de incentivo às exportações <b>associados ao regime de Drawback</b>, atuando de
          forma complementar na redução da carga tributária incidente sobre produtos destinados ao mercado externo. O
          programa é aplicável exclusivamente às empresas que realizam a exportação de bens manufaturados, abrangendo
          organizações industriais ou comerciais que exportam produtos processados em território nacional.
        </p>
      </section>

      {/* ======================== SEÇÃO 2 ======================== */}
      <section className="secao-2">
        <div className="titulos">
          <h1>Como funciona?</h1>
          <hr style={{ background: "#23317e", height: 4, border: 0, width: 200 }} />
        </div>

        <p>
          O REINTEGRA funciona devolvendo às empresas exportadoras uma parte dos tributos acumulados ao longo da cadeia
          produtiva, reduzindo o custo final do produto exportado. A empresa realiza a exportação normalmente e, após o
          embarque da mercadoria, pode solicitar o crédito do programa com base no valor da receita de exportação. Essa
          devolução é feita por meio de um percentual estabelecido pelo governo, aplicado sobre o valor exportado, e o
          crédito obtido pode ser usado para compensar outros tributos federais ou ser ressarcido em dinheiro. Dessa
          forma, o REINTEGRA ajuda a melhorar a competitividade da indústria brasileira no Mercado Internacional e
          incentiva a ampliação das exportações de produtos manufaturados.
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
