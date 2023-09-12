import { useDispatch } from 'react-redux';
import { Dispatch } from './types';
import { useEffect } from 'react';
import { fetchFeedThunk } from './redux/thunks';
import Feed from './components/Feed';

// TODO: Implementar proxima pagina e pagina anterior
// TODO: Implementar filtros
// TODO: Melhorar o layout

function App() {
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFeedThunk(1));
  }, []);

  return (
    <Feed />
  );
}

export default App;
