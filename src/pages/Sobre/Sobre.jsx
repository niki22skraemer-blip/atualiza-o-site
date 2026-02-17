import { useEffect } from "react";
import usePageCss from "../../hooks/usePageCss";
import Mission from "../../components/Mission/Mission.jsx";
import ExpandableProfileCard from "../../components/ExpandableProfileCard/ExpandableProfileCard.jsx";


export default function Sobre() {
  // CSS da página
  usePageCss("/Abas/Sobre/sobre.css");

  // Reveal (igual ao da Home)
  useEffect(() => {
    const elementos = document.querySelectorAll(".reveal");
    if (!elementos.length) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elementos.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* ============================= SEÇÃO 1 ============================= */}
      <section className="secao-1">
        <div className="titulo-principal">
          A Visonet é uma empresa de Tecnologia da Informação, que, há mais de 30 anos,
          contribui para potencializar os resultados de muitas empresas do Brasil,
          principalmente nas áreas de Comércio Exterior, Fiscal e Tributária.
        </div>

        <p>
          Temos grande satisfação em nossa trajetória, marcada por inúmeros cases de sucesso.
          Atendemos empresas de diversos estados brasileiros, atuando em diferentes setores e portes.
          Essa diversidade e complexidade tornaram-se parte da nossa identidade e de nossos valores
          em um mercado cada vez mais exigente e competitivo. Ao longo desse caminho, desenvolvemos
          soluções especializadas e sistemas que automatizam processos, combinando o conhecimento
          técnico de Comércio Exterior e TI, buscando inovação e, cada vez mais, o apoio da IA para
          trazer eficiência, padronização e confiabilidade às operações.
          <br />
          <br />
          Com espírito empreendedor, identificamos a necessidade de contribuir para o desenvolvimento
          e a formação de profissionais e empresas na área. Por isso, há mais de 20 anos, criamos
          simuladores de ensino prático que hoje são utilizados em escala nacional. Universidades,
          escolas e estudantes de diferentes regiões têm enriquecido seus processos de aprendizagem
          com a plataforma COMEXLABS. Nesse período, já contabilizamos mais de 100 mil usuários — um
          marco que reforça nosso pioneirismo e a história construída com consistência e evolução
          contínua. Nossa renovação é constante: um time criativo e engajado, aliado a soluções robustas,
          representa a materialização da qualidade e do compromisso que mantemos com nossos clientes e
          com a sociedade.
        </p>
      </section>

      {/* ============================= SEÇÃO 2 ============================= */}
      <Mission/>
      

      {/* ============================= SEÇÃO 3 ============================= */}
      <ExpandableProfileCard />

      {/* ============================= SEÇÃO 4 ============================= */}
      <section className="secao-4">
        <div className="titulos">
          <h1>Entre em contato</h1>
          <hr style={{ background: "#23317e", height: 4, border: 0, width: 230 }} />
        </div>

        <div className="fale-conosco">
          <div className="conteudo-container">
            <p>
              <b>FALE COM A VISONET</b>
            </p>

            <div className="contatos">
              <div className="contato-1">
                <img src="/Icons/ic_call-20-outline-white.svg" alt="" />
                <a href="tel:+5551993753092">(51) 99375-3092</a>
              </div>

              <div className="contato-2">
                <img src="/Icons/ic_mail-20-outline-white.svg" alt="" />
                <a href="mailto:contato@visonet.net">contato@visonet.net</a>
              </div>

              <div className="contato-3">
                <p>Horário de Atendimento: Segunda a Sexta – 08h às 12h e 13h15 às 18h</p>
              </div>

              <div className="contato-4">
                <p>Edifício Silec – Avenida João Correa, 933, sala 604 Centro, São Leopoldo – RS CEP: 93010-193</p>

                <div className="mapa">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.2415086549977!2d-51.14704382431116!3d-29.770657418634627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951968509d6c96a7%3A0xd046fe4fa94e5b99!2sEdif%C3%ADcio%20Silec!5e0!3m2!1spt-BR!2sbr!4v1765820233906!5m2!1spt-BR!2sbr"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa Visonet"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
