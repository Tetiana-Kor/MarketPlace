import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { filterCountries } from '../../redux/Product/filter-slice';
import { FILTER_COUNTRIES } from '../../utils/const';
import s from './Filter.module.css';

const countriesForStore = (countriesValues) =>
  countriesValues.map(({ value }) => value);

const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeCountries = (countriesValues) => {
    dispatch(filterCountries(countriesForStore(countriesValues)));
  };

  return (
    <div className={s.select}>
      <p className={s.select__country}>Filter by country...</p>
      <Select
        options={FILTER_COUNTRIES}
        isMulti
        onChange={handleChangeCountries}
      />
    </div>
  );
};

export default Filter;
