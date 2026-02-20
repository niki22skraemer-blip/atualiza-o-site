import React, { useState, useEffect, useRef } from 'react';
import usePageCss from "../../hooks/usePageCss";

export default function Servicos() {
  usePageCss("/Abas/Servicos/servicos.css");

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

      {/* ============================= SEÇÃO 2 (ANIMADA) ============================= */}
      <section ref={sectionRef} className="secao-2-container">
        <div className={`wrapper-animacao ${isAtivo ? 'ativo' : ''}`}>
          
          <img 
            src="/Midias/servicos/foto-1.webp" 
            alt="Serviços Visonet" 
            className="foto-animada"
          />

          <div className="texto-animado">
            <p>
              Com mais de 30 anos de expertise e profundo domínio da legislação 
              aduaneira e tributária, a Visonet presta suporte estratégico completo 
              que abrange desde a gestão de cadastros de produtos no SISCOMEX até o 
              cumprimento de obrigações acessórias digitais. Nossas soluções incluem 
              programas de recuperação de tributos, elaboração de declarações eletrônicas 
              e gestão de certificados de origem, garantindo total conformidade, rastreabilidade 
              e alinhamento às normas vigentes em todas as etapas das operações de Comércio Exterior.
            </p>
          </div>
          
        </div>
      </section>

      {/* ============================= SEÇÃO 5 ============================= */}
      <section className="secao-5">
        <div className="titulos">
          <h1>Nossos Serviços</h1>
          <hr style={{ background: "#23317e", height: 4, border: 0, width: 200, margin: "10px auto" }} />
        </div>

        <div className="container-geral">
          <div className="container-sistema">
            <div className="sistema">
              <a href="/reintegra">
                <h3>REINTEGRA</h3>
                <p className="descricao">
                  Programa da Receita Federal que devolve às empresas exportadoras parte dos tributos pagos ao longo da cadeia produtiva.
                </p>
                <span className="p-2">Saiba mais</span>
              </a>
            </div>

            <div className="sistema">
              <a href="/sped">
                <h3>SPED para Exportação</h3>
                <p className="descricao">
                  Sistema da Receita Federal que unifica e digitaliza a escrituração fiscal e contábil das empresas.
                </p>
                <span className="p-2">Saiba mais</span>
              </a>
            </div>

            <div className="sistema">
              <a href="/catalogo">
                <h3>CATÁLOGO DE PRODUTOS</h3>
                <p className="descricao">
                  Serviço relacionado a catalogação de produtos importados no portal Siscomex.
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
