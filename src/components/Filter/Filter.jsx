import { useDispatch } from 'react-redux';

import { changeFilter } from 'redux/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleOnChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" name="filter" onChange={handleOnChange}></input>
    </>
  );
};
