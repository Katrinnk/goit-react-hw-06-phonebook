import { saveFilter } from 'components/Redux/Filter/FilterSlice';
import { getFilter } from 'components/Redux/Selectors';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = ({ target: { value } }) => {
    dispatch(saveFilter(value));
  };

  return (
    <div className="mb-3 ms-3 me-3">
      <label htmlFor="filterContact" className="form-label">
        Find contacts by name
      </label>
      <input
        name="title"
        type="text"
        onChange={handleChangeFilter}
        className="form-control"
        id="filterContact"
        value={filter}
      />
    </div>
  );
};
