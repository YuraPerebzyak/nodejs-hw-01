import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    const contactsLength = contacts.length;
    return contactsLength;
  } catch (error) {
    console.log(error);
  }
};

console.log(await countContacts());
