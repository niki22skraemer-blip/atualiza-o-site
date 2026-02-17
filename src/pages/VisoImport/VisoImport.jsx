import usePageCss from "../../hooks/usePageCss";

export default function VisoImport() {
  usePageCss("/Abas/Viso-import/viso-import.css");

  return (
    <main>
      {/* ======================== SEÇÃO 1 ======================== */}
      <section className="secao-1">
        <div className="titulos-1">
          <h1>
            Apresentando o <br />
            VISOImportNFE
          </h1>
          <hr
            style={{
              background: "#23317e",
              height: 4,
              border: 0,
              width: 200,
            }}
          />
        </div>

        <p>
          O VISOImportNFE é um sistema web desenvolvido para tornar o processamento de rateios de impostos e despesas
          muito mais simples e eficiente. Ele automatiza a geração de arquivos e reduz significativamente o tempo gasto
          na emissão da NF-e de entrada. Uma de suas principais vantagens é eliminar a necessidade de redigitar dados e
          valores, o que torna o trabalho mais ágil, preciso e seguro. Com essa ferramenta, o usuário consegue otimizar
          seu fluxo de trabalho, economizar tempo e evitar retrabalho, especialmente graças à praticidade no cálculo dos
          tributos de importação, à dispensa do cadastro manual de produtos e ao processo intuitivo e de fácil operação
          que facilita a rotina de quem lida com notas fiscais e operações de Comércio Exterior.
        </p>
      </section>

      {/* ======================== SEÇÃO 2 ======================== */}
      <section className="secao-2">
        <div className="titulos">
          <h1>Como funciona?</h1>
          <hr
            style={{
              background: "#23317e",
              height: 4,
              border: 0,
              width: 200,
            }}
          />
        </div>

        <p>
          Na plataforma, o usuário pode consultar a Declaração de Importação usando o Certificado Digital A1, importar o
          XML da DI e, com apenas um clique em “Gerar Tributos”, obter o cálculo detalhado dos impostos incidentes,
          incluindo II, IPI, PIS, COFINS e ICMS. O sistema também permite gerar o espelho da NF-e em Excel, além dos
          arquivos TXT e XML necessários para emissão e integração com diferentes ERPs. Depois disso, o usuário pode
          enviar o espelho para o cliente ou para o setor financeiro, bem como importar os arquivos diretamente no site
          da SEFAZ. O VISOImportNFE trabalha com três tipos principais de arquivos: o espelho da nota fiscal em Excel, o
          arquivo TXT no padrão da SEFAZ e o XML utilizado para importação em sistemas de gestão.
        </p>
      </section>

      {/* ======================== SEÇÃO 3 ======================== */}
      <section className="secao-3">
        <div className="titulos">
          <h1>Entre em contato</h1>
          <hr
            style={{
              background: "#23317e",
              height: 4,
              border: 0,
              width: 230,
            }}
          />
        </div>

        <div className="fale-conosco">
          <div className="conteudo-container">
            <p>FALE COM A VISONET</p>

            <div className="contatos">
              <div className="contato-1">
                <img src="/Icons/ic_call-20-outline-white.svg" alt="Telefone" />
                <a href="tel:+5551993753092">(51) 99375-3092</a>
              </div>

              <div className="contato-2">
                <img src="/Icons/ic_mail-20-outline-white.svg" alt="E-mail" />
                <a href="mailto:contato@visonet.net">contato@visonet.net</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
