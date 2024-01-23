import "./Noticia.css";

export const Noticia = () => {
  return (
    <div className="noticia">
      <div className="mid-text">
        <img
          className="principal-image"
          alt="imagem principal"
          src="../public/slide2.svg"
        />
        <div className="container">
          <p className="text-wrapper">
            Worem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="por-fulano-silva">
            <span className="span-1">
              Por Fulano Silva - 01/01/1990 - 12h00 em{" "}
            </span>
            <strong>Séries Nacionais</strong>
          </p>
          <p className="dorem-ipsum-dolor">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dorem ipsum dolor
            sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
            dictum est a, mattis tellus. Sed dignissim, metus nec fringilla
            accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed
            risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
            ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac
            rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi
            convallis convallis diam sit amet lacinia. Aliquam in elementum
            tellus.
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Curabitur
            tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a
            convallis. Sed ut vulputate nisi. Integer in felis sed leo
            vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex
            eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus,
            porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna
            non ligula vestibulum eleifend. Nulla varius volutpat turpis sed
            lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum
            sem condimentum ullamcorper quis venenatis nisi. Proin vitae
            facilisis nisi, ac posuere leo.
          </p>
        </div>
      </div>

      <div className="overlap-wrapper">
        <div className="see-more">
          <div className="see-more-line">
            <div className="text-wrapper-7">Veja mais</div>
            <img className="line" alt="linha preta" src="./public/line7.png" />
          </div>

          <div className="see-more-content">
            <div className="image-and-text">
              <img
                className="feed-img"
                alt="pessoa vendo filme"
                src="./public/slide1.png"
              />
              <p className="see-more-text">
                Worem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="image-and-text">
              <img
                className="feed-img"
                alt="pessoa vendo filme"
                src="./public/slide1.png"
              />
              <p className="see-more-text">
                Worem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="image-and-text">
              <img
                className="feed-img"
                alt="pessoa vendo filme"
                src="./public/slide1.png"
              />
              <p className="see-more-text">
                Worem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="image-and-text">
              <img
                className="feed-img"
                alt="pessoa vendo filme"
                src="./public/slide1.png"
              />
              <p className="see-more-text">
                Worem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
