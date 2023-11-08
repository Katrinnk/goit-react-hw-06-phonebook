import { CreateContact } from './Forms/CreateContact/CreateContact';
import { Filter } from './Forms/Filter/Filter';
import { ContactList } from './List/List';

export const App = () => {
  return (
    <>
      <h1 className="mt-3 ms-3">Phonebook</h1>
      <CreateContact />
      <h2 className="ms-3">Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};
