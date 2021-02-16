export const ModuleConfig = {
  name_lowercase: 'student',
  name_capitalize: 'Student',
  name_uppercase: 'STUDENT',
  name_lowercase_plural: 'students',
  name_capitalize_plural: 'Students',
  name_uppercase_plural: 'STUDENTS',
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
