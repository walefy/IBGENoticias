import { styled } from 'styled-components';
import { News } from '../types';
import { useCallback } from 'react';

type NewsCardProps = {
  news: News;
};

function NewsCard({ news }: NewsCardProps) {
  const handleClickLink = useCallback((link: string) => {
    window.open(link, '_blank');
  }, []);

  return (
    <LiStyled>
      <h3 onClick={ () => handleClickLink(news.link) }>{news.titulo}</h3>
      <span>{news.data_publicacao}</span>
      <NewsImage
        src={news.imagens.image_intro}
        alt={news.imagens.image_intro_alt}
        onClick={() => handleClickLink(news.link)}
      />
      <p>{news.introducao}</p>
      <span>
        editora:
        {' '}
        { news.editorias }
      </span>
    </LiStyled>
  );
}

const NewsImage = styled.img`
  min-width: 487px;
  height: 293px;
  border-radius: 0.5rem;
  object-fit: cover;

  @media (max-width: 768px) {
    min-width: 100%;
    width: 100%;
  }
`;

const LiStyled = styled.li`
  display: flex;
  min-width: 487px;
  width: 30%;
  flex-direction: column;
  list-style: none;
  flex-wrap: wrap;
  border-radius: 0.5rem;
  padding: 1rem;
  gap: 0.7rem;
  border: 1px solid #e8e8e8;
  background-color: whitesmoke;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) or (max-width: 992px) {
    min-width: 100%;
  }

  span {
    font-size: 0.8rem;
  }

  h3, img {
    cursor: pointer;
  }
`;

export default NewsCard;
