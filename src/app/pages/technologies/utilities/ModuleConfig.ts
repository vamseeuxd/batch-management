export const ModuleConfig = {
  name_lowercase: 'technology',
  name_capitalize: 'Technology',
  name_uppercase: 'TECHNOLOGY',
  name_lowercase_plural: 'technologies',
  name_capitalize_plural: 'Technologies',
  name_uppercase_plural: 'TECHNOLOGIES',
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
