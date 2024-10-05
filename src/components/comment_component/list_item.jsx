import React, { useState, useEffect } from 'react';
import { deleteItem } from '../../redux/actions';
import { useDispatch } from 'react-redux';

const ListItem = ({title, comleted, id}) => {

  const [value, setValue] = useState('')

  const dispatch = useDispatch()



  useEffect(() => {
    if(title) {
      setValue(title)
    }
  }, [title])

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      width: '450px',
      gap: '20px',
      marginLeft: '10px',
      marginBottom: '8px'
      
    }}>
      <button onClick={() => dispatch(deleteItem(id))}><i class="fa-solid fa-xmark"></i></button>
      <input 
        style={{
          border: 'none',
          outline: 'none',
          width: "70%",
          
          borderBottom: '1px solid black'
        }}
        onChange={(e) => setValue(e.target.value)}
        type="text" value={value} />
    </div>
  );
};

export default ListItem;