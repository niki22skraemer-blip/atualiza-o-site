import usePageCss from "../../hooks/usePageCss";

export default function Sped() {
  usePageCss("/Abas/Sped/sped.css");

  return (
    <main>
      {/* ======================== SEÇÃO 1 ======================== */}
      <section className="secao-1">
        <div className="titulos-1">
          <h1>Apresentando o SPED para Exportação</h1>
          <hr style={{ background: "#23317e", height: 4, border: 0, width: 400 }} />
        </div>

        <p>
          O SPED é uma plataforma criada pelo governo brasileiro para unificar e digitalizar a entrega de obrigações
          fiscais, contábeis e trabalhistas das empresas. Ele substitui livros e documentos em papel por arquivos
          eletrônicos padronizados, tornando o envio das informações mais rápido, seguro e integrado.
          <br />
          <br />
          Nossa empresa atua <b>exclusivamente com SPED voltado à Exportação</b>, oferecendo soluções especializadas para
          empresas que operam no Comércio Exterior. Por meio do SPED aplicado às operações de exportação, é possível
          centralizar registros, reduzir erros, otimizar processos e garantir total conformidade com as exigências da
          Receita Federal, modernizando a gestão fiscal e aduaneira relacionada às exportações.
        </p>
      </section>

      {/* ======================== SEÇÃO 2 ======================== */}
      <section className="secao-2">
        <div className="titulos">
          <h1>Como funciona?</h1>
          <hr style={{ background: "#23317e", height: 4, border: 0, width: 200 }} />
        </div>

        <p>
          O SPED para Exportação funciona como um sistema digital que centraliza e padroniza o envio das informações
          fiscais e contábeis relacionadas <b>exclusivamente às operações de exportação</b>. Cada obrigação aplicável —
          como a Escrituração Fiscal Digital (EFD) e a Nota Fiscal Eletrônica (NF-e) vinculada à exportação — é gerada em
          formato eletrônico específico, por meio do sistema da empresa ou de softwares de gestão compatíveis.
          <br />
          <br />
          Esses arquivos são transmitidos diretamente à Receita Federal, que realiza validações automáticas para verificar
          a consistência dos dados, cruzar informações e assegurar o cumprimento da legislação vigente para o Comércio
          Exterior. Após a validação, o envio é concluído e a empresa permanece regular quanto às obrigações fiscais
          relacionadas às exportações.
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
