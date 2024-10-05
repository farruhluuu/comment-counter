import React from 'react';
import AddComponent from './add_component';
import ListComment from './list_comment';
import { useSelector, useDispatch } from 'react-redux';
import {increament, decrement, cleare} from '../../redux/actions'

const CommnetMain = () => {
  const {count} = useSelector(state => state.count_reducer)
  const dispatch = useDispatch();
  return (
    <>
      <div className='block'>
        <div className='img'>
          <img src="https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg" alt="" />

          <div className='btm'>
            <button onClick={() => dispatch(increament())}>{count} <i class="fa-solid fa-heart"></i></button>
            <button onClick={() => dispatch(decrement())}><i class="fa-solid fa-thumbs-down"></i></button>
          </div>
        
        </div>
        <div className='add'>
          <AddComponent/> 
          <ListComment/>
        </div>
      </div>
    
    </>
  );
};

export default CommnetMain;