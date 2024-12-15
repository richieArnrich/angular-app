export interface IRole {
  roleId: number;
  role: string;
}

export interface iDesignation {
  designationId: number;
  designation: string;
}

export interface APIResponseModel {
  message: string;
  result: boolean;
  data: any;
}
