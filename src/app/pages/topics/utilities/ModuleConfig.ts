export const ModuleConfig = {
  name_lowercase: 'topic',
  name_capitalize: 'Topic',
  name_uppercase: 'TOPIC',
  name_lowercase_plural: 'topics',
  name_capitalize_plural: 'Topics',
  name_uppercase_plural: 'TOPICS',
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
