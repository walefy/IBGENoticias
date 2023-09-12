import { useSelector } from 'react-redux';
import { RootState } from '../types';
import NewsCard from './NewsCard';
import { styled } from 'styled-components';

function Feed() {
  const news = useSelector((state: RootState) => state.news);

  return (
    <UlFeedStyled>
      {news.map((item) => (
        <NewsCard key={item.id} news={item} />
      ))}
    </UlFeedStyled>
  );
}

const UlFeedStyled = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1rem;
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
  overflow-y: auto;
`;

export default Feed;
