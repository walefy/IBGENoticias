import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiIBGEResponse } from '../../types';
import { actions } from '../actions';
import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const fetchFeedThunk = createAsyncThunk('news/fetchFeed', async (page: number, { dispatch }) => {
  const result = await fetch(`https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100&page=${page}`);
  const json: ApiIBGEResponse = await result.json();
  const today = new Date();

  json.items.forEach((item) => {
    item.imagens = JSON.parse(item.imagens);
    item.imagens.image_intro = `http://agenciadenoticias.ibge.gov.br/${item.imagens.image_intro}`;
    const [datePart, timePart] = item.data_publicacao.split(' ');
    const [day, month, year] = datePart.split('/').map(Number);
    const [hour, minute, second] = timePart.split(':').map(Number);
    
    const publishedDate = new Date(year, month - 1, day, hour, minute, second);
    const timeAgo = formatDistance(publishedDate, today, { locale: ptBR, addSuffix: true });

    item.data_publicacao = timeAgo;
  });

  dispatch(actions.setNews(json.items));
});
