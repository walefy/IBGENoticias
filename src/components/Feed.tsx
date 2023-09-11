import { useSelector } from 'react-redux';
import { RootState } from '../types';

function Feed() {
  const news = useSelector((state: RootState) => state.news);

  return (
    <ul>
      {news.map((item) => (
        <li key={item.id}>{item.titulo}</li>
      ))}
    </ul>
  );
}

export default Feed;
