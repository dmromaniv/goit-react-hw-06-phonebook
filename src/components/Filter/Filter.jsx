import PropTypes from 'prop-types';

export const Filter = ({ setContactFilter }) => {
  const handleOnChange = event => {
    setContactFilter(event.target.value);
  };

  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" name="filter" onChange={handleOnChange}></input>
    </>
  );
};

Filter.propTypes = {
  setContactFilter: PropTypes.func.isRequired,
};
