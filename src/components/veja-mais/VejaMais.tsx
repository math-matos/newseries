import "./VejaMais.css";

export const VejaMais = () => {
  return (
    <div className="overlap-wrapper">
      <div className="see-more">
        <div className="see-more-line">
          <div className="text-wrapper-7">Veja Mais</div>
          <img
            className="line"
            alt="linha preta"
            src="../../../public/Line7.png"
          />
        </div>

        <div className="see-more-content">
          <div className="image-and-text">
            <img
              className="feed-img"
              alt="Geto acenando"
              src="https://ovicio.com.br/wp-content/uploads/2023/08/20230822-suguru-geto-3.webp"
            />
            <p className="see-more-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
