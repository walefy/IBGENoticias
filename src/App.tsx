import { useDispatch } from 'react-redux';
import { Dispatch } from './types';
import { useEffect } from 'react';
import { fetchFeedThunk } from './redux/thunks';
import Feed from './components/Feed';

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
