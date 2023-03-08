import { useEffect } from 'react';
import Public from '../routes/Public';
import uuid from 'uuid';
import { useDispatch } from 'react-redux';
import { setSession } from '../store/reducers/auth/auth-reducer';

const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSession(uuid.v4()));
  }, []);
  return <Public />;
};

export default MainContainer;
