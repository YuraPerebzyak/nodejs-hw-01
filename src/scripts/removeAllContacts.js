import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const removeContacts = [];
    writeContacts(removeContacts);
  } catch (error) {
    console.log(error);
  }
};

removeAllContacts();
