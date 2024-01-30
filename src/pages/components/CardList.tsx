import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';

type Props = { url: string; titulo: string; subtitulo: string };

const CardList = ({ url, titulo, subtitulo }: Props) => {
  const isDesktop = useMediaQuery('(min-width: 1281px)');
  const isNotebook = useMediaQuery('(max-width: 1280px)');
  const isTablet = useMediaQuery('(max-width: 1023px)');
  const isMobile = useMediaQuery('(max-width: 480px)');

  const [limiteDoTexto, setLimiteDoTexto] = useState<string>();
  useEffect(() => {
    if (isMobile) {
      setLimiteDoTexto('20ch');
    } else if (isTablet) {
      setLimiteDoTexto('30ch');
    } else if (isNotebook) {
      setLimiteDoTexto('40ch');
    } else if (isDesktop) {
      setLimiteDoTexto('50ch');
    }
  }, [isDesktop, isMobile, isTablet, isNotebook]);

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        boxSizing: 'border-box',
        alignItems: 'flex-start',
      }}
    >
      <Box
        component="img"
        src={url}
        sx={{
          borderRadius: '0.7rem 0 0 0.7rem',
          boxShadow: 2,
          objectFit: 'cover',
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          padding: '1.5rem',
          boxShadow: 1,
          borderRadius: '0 0.7rem 0.7rem 0',
          height: '100%',
          boxSizing: 'border-box',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <Typography variant="h3" color={'secondary'} fontWeight={'700'}>
            {titulo}
          </Typography>
          <Typography
            variant="body1"
            color={'secondary'}
            fontSize={14}
            lineHeight={1.5}
            sx={{
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              maxWidth: `${limiteDoTexto}`,
            }}
          >
            {subtitulo}
          </Typography>
        </div>
        <Button
          variant="contained"
          sx={{
            maxWidth: 'fit-content',
          }}
        >
          Tempo em avaliação: X dias
        </Button>
      </Box>
    </Box>
  );
};

export default CardList;
