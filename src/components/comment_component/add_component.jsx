import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddComment } from '../../redux/actions';

const AddComponent = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(AddComment(value))
    setValue('')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
        className='input-comment'
          placeholder='commnet'
          value={value}
          onChange={(event) => setValue(event.target.value)}
          type="text" />
      </form>
    </div>
  );
};

export default AddComponent;