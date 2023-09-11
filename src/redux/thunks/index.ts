import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiIBGEResponse } from '../../types';
import { actions } from '../actions';

export const fetchFeedThunk = createAsyncThunk('news/fetchFeed', async (page: number, { dispatch }) => {
  const result = await fetch(`https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100&page=${page}`);
  const json: ApiIBGEResponse = await result.json();

  json.items.forEach((item) => {
    item.imagens = JSON.parse(item.imagens);
    item.imagens.image_intro = `http://agenciadenoticias.ibge.gov.br/${item.imagens.image_intro}`;
  });

  dispatch(actions.setNews(json.items));
});
