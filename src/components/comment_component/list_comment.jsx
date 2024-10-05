import React from 'react';
import { useSelector } from 'react-redux';
import ListItem from './list_item';


const ListComment = () => {
  const {comments} = useSelector(state => state.comment_reducer)
  
  return (
    <div className='list'>
      {comments && comments.map(item => (
        <ListItem key={item.id} {...item}/>
      ))}
    </div>
  );
};

export default ListComment;