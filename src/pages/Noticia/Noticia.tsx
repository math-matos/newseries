import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";

import { Button } from "@mui/material";

import "./Noticia.css";
import { Avaliacao } from "../../components/avaliacao/Avaliacao";
import { VejaMais } from "../../components/veja-mais/VejaMais";

export const Noticia = () => {
  const { id } = useParams();
  const { series } = useFetch();

  const serieSelecionada = series && series.find((serie) => serie.id == id);

  console.log(serieSelecionada);

  const [isLogged, setIsLogged] = useState(false);

  const toggleLoginStatus = () => {
    setIsLogged(!isLogged);
  };

  return (
    <div className="noticia">
      <div className="mid-text">
        <img
          className="principal-image"
          alt="imagem principal"
          src={`https://image.tmdb.org/t/p/w500/${
            serieSelecionada && serieSelecionada.backdrop_path
          }`}
        />
        <div className="container">
          <p className="text-wrapper">
            {serieSelecionada && serieSelecionada.name}
          </p>
          <p className="por-fulano-silva">
            <span className="span-1">
              Por Fallen da Silva |{" "}
              {`${serieSelecionada && serieSelecionada.first_air_date}`} - 12h00
              em{" "}
            </span>
            <strong>Séries Nacionais</strong>
          </p>
          <p className="dorem-ipsum-dolor">
            {serieSelecionada && serieSelecionada.overview}
          </p>
        </div>
      </div>

      {/* INICIO TABELA DA DIREITA DE VEJA MAIS + condicional da AVALIACAO */}
      {/* usar lógica de autenticação aqui */}
      {isLogged ? <Avaliacao /> : <VejaMais />}
      <Button
        sx={{ fontSize: "2rem" }}
        variant="contained"
        onClick={toggleLoginStatus}
      >
        {isLogged ? "Logout" : "Login"}
      </Button>
      
      {/* FIM TABELA DA DIREITA DE VEJA MAIS + condicional da AVALIACAO */}
    </div>
  );
};
