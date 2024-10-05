import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increament, decrement, cleare} from '../../redux/actions'

const CountComponent = () => {

  const {count} = useSelector(state => state.count_reducer)
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increament())}>increament</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <span>{count}</span>
      <button onClick={() => dispatch(cleare())}>cleare</button>
    </div>
  );
};

export default CountComponent