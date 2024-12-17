import { createRequest, RequestFunction } from './instance';

export type CreateType = 'NEW' | 'EXISTING';
export type Language = 'ENGLISH' | 'KOREAN';
export type PackageType = 'BASIC' | 'LECTURE';

export interface RegistEnrollmentBaseArgs {
  email: string;
  lastNameEng: string;
  firstNameEng: string;
  certificationId?: string;
  language?: Language;
  packageType: PackageType;
  membershipId?: string;
}

export interface RegistEnrollmentByNewMemberArgs extends RegistEnrollmentBaseArgs {
  createType: 'NEW';
  lastNameKor: string;
  firstNameKor: string;
  companyNameEng: string;
  companyNameKor: string;
  industry: string;
  departmentEng: string;
  departmentKor: string;
  positionKor: string;
  positionEng: string;
  officeNumber: string;
  phoneNumber: string;
  subEmail: string;
  honorific: string;
}

export interface RegistEnrollmentByExistingMemberArgs extends RegistEnrollmentBaseArgs {
  createType: 'EXISTING';
  membershipNumber: string;
}

export type RegistEnrollmentArgs = RegistEnrollmentByNewMemberArgs | RegistEnrollmentByExistingMemberArgs;

export interface RegistEnrollmentResponse {
  id: string;
  email: string;
}

export const registEnrollment: RequestFunction<RegistEnrollmentArgs, RegistEnrollmentResponse> = body => {
  return createRequest({
    method: 'POST',
    endpoint: '/enrollments',
    body: { ...body },
  });
};
