import React, { useState, useEffect, useRef } from 'react';
import usePageCss from "../../hooks/usePageCss";

export default function Sistemas() {
  usePageCss("/Abas/Sistemas/sistemas.css");

  const [isAtivo, setIsAtivo] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAtivo(true);
        }
      },
      { threshold: 0.5 } // Ativa quando metade da seção estiver visível
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  return (
    <main>
      {/* SEÇÃO 1 - Mantida igual */}
      <section className="secao-1">
        <div className="titulo-1">
          <h1>Tecnologia que impulsiona sua empresa no Comércio Exterior</h1>
        </div>
        <div className="subtitulo">
          <p>Nossas soluções digitais, como o VISOImport e o GESPRO, 
            foram desenhadas para automatizar fluxos complexos, reduzir 
            erros manuais e oferecer mais controle sobre suas 
            operações de Comércio Exterior.</p>
        </div>
      </section>

      <section ref={sectionRef} className="secao-3-container">
        <div className={`wrapper-animacao ${isAtivo ? 'ativo' : ''}`}>
          
          <img 
            src="/Midias/servicos/foto-2.jpg" 
            alt="Soluções em Comércio Exterior" 
            className="foto-animada"
          />

          <div className="texto-animado">
            <p>
              A Visonet oferece ecossistemas digitais robustos e integrados, 
              apoiados por tecnologias de ponta e Inteligência Artificial para 
              conferir previsibilidade e alta performance às rotinas de Importação, 
              Exportação e Drawback. Nossos sistemas especializados e soluções como 
              o VISOImport e GESPRO, são desenvolvidos para reduzir o retrabalho e 
              aumentar a eficiência, transformando a complexidade operacional em 
              confiabilidade e resultados concretos para a gestão do seu negócio.
            </p>
          </div>
          
        </div>
      </section>
      {/* ============================= SEÇÃO 5 ============================= */}
      <section className="secao-5">
        <div className="titulos">
          <h1>Nossos Sistemas</h1>
          <hr style={{ background: "#23317e", height: 4, border: 0, width: 200, margin: "10px auto" }} />
        </div>

        <div className="container-geral">
          <div className="container-sistema">
            {/* CARD 1 */}
            <div className="sistema">
              <a href="/visodue">
                <h3>VISO DUE</h3>
                <p className="descricao">
                  Com mais de 30 anos de experiência, a Visonet simplifica a elaboração da DU-E com agilidade, segurança e
                  confiança, otimizando suas exportações para alcançar novos mercados.
                </p>
                <span className="p-2">Saiba mais</span>
              </a>
            </div>

            {/* CARD 2 */}
            <div className="sistema">
              <a href="/visoimport">
                <h3>VISO IMPORT-NFE</h3>
                <p className="descricao">
                  O Sistema gera arquivos XML’s que possibilitam a emissão da NF-e de Importação, a partir dos dados da
                  Declaração de Importação (DI) Registrada no SISCOMEX.
                </p>
                <span className="p-2">Saiba mais</span>
              </a>
            </div>

            {/* CARD 3 */}
            <div className="sistema">
              <a href="/gespro">
                <h3>GESPRO</h3>
                <p className="descricao">
                  Sistema destinado à gestão de produtos e à emissão de Declarações de Origem.
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