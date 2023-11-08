import { deleteContact } from 'components/Redux/Contacts/ContactsSlice';
import { getContacts, getFilter } from 'components/Redux/Selectors';
import { useDispatch, useSelector } from 'react-redux';

export const ContactList = () => {
  const { contacts } = useSelector(getContacts);
  const { filter } = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const filterContacts = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      <ul className="list-group">
        {filterContacts().map(el => (
          <li className="list-group-item ms-3 me-3" key={el.id}>
            {el.name}: {el.number}
            <button
              type="button"
              className="btn-close ms-5"
              aria-label="Close"
              onClick={() => handleDelete(el.id)}
            ></button>
          </li>
        ))}
      </ul>
    </>
  );
};
