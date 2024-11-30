import { PATH_DB } from '../constants/contacts.js';

import fs from 'fs/promises';
import { readContacts } from './readContacts.js';

export const writeContacts = async (updatedContacts) => {
  const contacts = await readContacts();
  try {
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedContacts, null, 2),
      'utf-8',
    );
  } catch (error) {
    console.log(error);
  }
};
