import { useState } from 'react';
import {
  Box,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import useFetch from '../../hooks/useFetch';
import CardNoticia from '../../components/CardNoticia';
import { Link } from 'react-router-dom';

const Lista = () => {
  const [categoria, setCategoria] = useState('');
  const { series } = useFetch();

  const handleChange = (event: SelectChangeEvent) => {
    setCategoria(event.target.value);
  };
  const image_path = 'https://image.tmdb.org/t/p/w500/';

  return (
    <>
      <Box
        component="main"
        sx={{
          paddingX: 18,
          paddingY: 8,
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            height: 'fit-content',
          }}
        >
          <Typography
            variant="h3"
            fontFamily={'Inter'}
            color={'secondary'}
            fontWeight={'700'}
          >
            Não Avaliadas
          </Typography>

          <Select
            color="secondary"
            value={categoria}
            onChange={handleChange}
            autoWidth
            label="Categoria"
            variant="standard"
          >
            <MenuItem value={1}>Tecnologia</MenuItem>
            <MenuItem value={2}>Comercial</MenuItem>
            <MenuItem value={3}>Executiva</MenuItem>
            <MenuItem value={4}>Defesa</MenuItem>
            <MenuItem value={5}>Mercado</MenuItem>
          </Select>
        </Box>
        <Box
          component="ul"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            height: 'fit-content',
          }}
        >
          {series &&
            series.map((serie, index) => (
              <li key={index}>
                <Link to={`/serie/${serie.id}/`}>
                  <CardNoticia
                    url={`${image_path}${serie.backdrop_path}`}
                    titulo={serie.name}
                    subtitulo={serie.overview}
                  />
                </Link>
              </li>
            ))}
        </Box>
      </Box>
    </>
  );
};

export default Lista;
