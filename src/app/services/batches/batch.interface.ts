export interface IStudent {
  id: string;
  name: string;
  email: string;
  mobile: string;
}

export interface IBatch {
  name: string;
  startDate: string;
  time: string;
  facultyName: string;
  facultyMobile: string;
  description: string;
  students?: IStudent[];
}
export interface IBatchId extends IBatch {
  id: string;
}
