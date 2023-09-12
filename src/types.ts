import { AnyAction } from '@reduxjs/toolkit';
import { ThunkDispatch } from 'redux-thunk';

export type News = {
  id: number;
  tipo: string;
  titulo: string;
  introducao: string;
  data_publicacao: string;
  produto_id: number;
  produtos: string;
  editorias: string;
  imagens: {
    image_intro: string;
    float_intro: string;
    image_intro_alt: string;
    image_intro_caption: string;
    image_fulltext: string;
    float_fulltext: string;
    image_fulltext_alt: string;
    image_fulltext_caption: string;
  };
  produtos_relacionados: string;
  destaque: boolean;
  link: string;
};

export type ApiIBGEItem = News & { imagens: string };

export type ApiIBGEResponse = {
  count: number;
  page: number;
  totalPages: number;
  nextPage: number | null;
  previousPage: number | null;
  showingFrom: number;
  showingTo: number;
  items: ApiIBGEItem[];
};

export type RootState = {
  news: News[];
  favoritesNews: News[];
};

export type Dispatch = ThunkDispatch<RootState, null, AnyAction>;
