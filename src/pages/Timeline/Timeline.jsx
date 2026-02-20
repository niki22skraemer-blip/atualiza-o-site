import React from "react";
import "./Timeline.css";

const timelineData = [
  {
    date: "Novembro 2029",
    text: "blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla",
    img: "https://imageio.forbes.com/specials-images/imageserve/6335d236f4ddc58b72592c39//960x0.jpg",
    spacing: "margin-bottom-xlarge"
  },
  {
    date: "Dezembro 2039",
    text: "blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla",
    img: "https://imageio.forbes.com/specials-images/imageserve/6335d236f4ddc58b72592c39//960x0.jpg",
    spacing: "margin-bottom-medium"
  },
  {
    date: "Novembro 2029",
    text: "blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla",
    img: "https://imageio.forbes.com/specials-images/imageserve/6335d236f4ddc58b72592c39//960x0.jpg",
    spacing: "margin-bottom-xlarge"
  },
  {
    date: "Novembro 2029",
    text: "blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla",
    img: "https://imageio.forbes.com/specials-images/imageserve/6335d236f4ddc58b72592c39//960x0.jpg",
    spacing: "margin-bottom-xlarge"
  }
];

export default function Timeline() {
  return (
    <div className="section-timeline">
      {/* Máscaras de Blur que você pediu */}
      <div className="timeline_mask-top"></div>

      <div className="container">
        <div className="timeline_component">
          {/* Linhas de progresso */}
          <div className="timeline_progress">
            <div className="timeline_progress-bar"></div>
          </div>

          {timelineData.map((item, index) => (
            <div key={index} className="timeline_item">
              <div className="timeline_left">
                <div className="timeline_date-text">{item.date}</div>
              </div>

              <div className="timeline_centre">
                <div className="timeline_circle"></div>
              </div>

              <div className="timeline_right">
                <div className={item.spacing}>
                  <div className="timeline_text">{item.text}</div>
                </div>

                <div className="timeline_image-wrapper">
                  <img
                    src={item.img}
                    loading="lazy"
                    width="480"
                    alt="tesla"
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Overlays originais do seu HTML */}
          <div className="overlay-fade-top"></div>
          <div className="overlay-fade-bottom"></div>
        </div>
      </div>

      {/* Máscara de Blur inferior */}
      <div className="timeline_mask-bottom"></div>

      {/* Espaço final para permitir o scroll da barra até o último item */}
      <div style={{ height: "50vh" }}></div>
    </div>
  );
}