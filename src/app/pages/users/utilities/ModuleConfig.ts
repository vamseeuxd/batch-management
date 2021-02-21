export const ModuleConfig = {
  name_lowercase: 'user',
  name_capitalize: 'User',
  name_uppercase: 'USER',
  name_lowercase_plural: 'users',
  name_capitalize_plural: 'Users',
  name_uppercase_plural: 'USERS',
};

export const NewEmptyFaculty = {
  id: '',
  name: '',
  email: '',
  mobile: '',
  deleted: '',
  createdOn: '',
  updatedOn: '',
  createdBy: '',
  updatedBy: '',
};

export interface IData {
  id?: string;
  name: string;
  email: string;
  mobile: string;
  deleted?: boolean;
  createdOn?: string;
  updatedOn?: string;
  createdBy?: string;
  updatedBy?: string;
}

export interface IColumn {
  size: string;
  field: string;
  title: string;
}

/*https://javascript-conference.com/blog/how-to-create-your-own-angular-schematics/*/
