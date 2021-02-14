export interface IStudent {
  id: string;
  name: string;
  email: string;
  mobile: string;
}

export interface IBatch {
  id: number;
  name: string;
  startDate: string;
  time: string;
  facultyName: string;
  facultyMobile: string;
  description: string;
  students?: IStudent[];
}
