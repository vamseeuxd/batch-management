export const ModuleConfig = {
  name_lowercase: 'batch',
  name_capitalize: 'Batch',
  name_uppercase: 'BATCH',
  name_lowercase_plural: 'batches',
  name_capitalize_plural: 'Batches',
  name_uppercase_plural: 'BATCHES',
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
