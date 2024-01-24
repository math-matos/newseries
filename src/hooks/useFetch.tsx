import { useState, useEffect } from 'react';
import { api } from '../api';

export interface Series {
  origin_country: [string];
  name: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  id: string;
}

function useFetch() {
  const [series, setSeries] = useState<[Series]>();
  const [error, setError] = useState<string>('');

  useEffect(() => {
    function fetchSeries() {
      api
        .get('https://api.themoviedb.org/3/tv/popular')
        .then((response) => {
          if (response.status == 200) {
            setSeries(response.data.results);
          }
        })
        .catch((error) => {
          setError('LoadTvs error ' + error);
        });
    }

    fetchSeries();
  }, []);

  return { series, error };
}

export default useFetch;
