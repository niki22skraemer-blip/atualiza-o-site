
import { useEffect } from "react";
import usePageCss from "../../hooks/usePageCss";
import "../../components/Carousel/Carousel.css";
import Carousel from "../../components/Carousel/Carousel.jsx";
import Section1 from "../../components/Section1/Section1.jsx";
import Section2 from "../../components/Section2/Section2.jsx";
import Section3 from "../../components/Section3/Section3.jsx";
import Section4 from "../../components/Section4/Section4.jsx";


export default function Home() {
  usePageCss("/Abas/Home/home.css");
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
    <>

      {/* ==================== CARROSSEL DE IMAGENS ==================== */}
      
	<Carousel />

      {/* ==================== SEÇÃO 1 ==================== */}
      
	<Section1 />

      {/* ==================== SEÇÃO 2 ==================== */}

      <Section2 />

      {/* ==================== SEÇÃO 3 ==================== */}
     
	<Section3 />

      {/* ==================== SEÇÃO 4 ==================== */}

	<Section4 />

      {/* ==================== RODAPÉ ===================== */}
      
    </>
  );
}
