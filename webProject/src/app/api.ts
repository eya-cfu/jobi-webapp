export * from './company.service';
import { CompanyService } from './company.service';
export * from './employer.service';
import { EmployerService } from './employer.service';
export * from './job-application.service';
import { JobApplicationService } from './job-application.service';
export * from './job-offer.service';
import { JobOfferService } from './job-offer.service';
export * from './student.service';
import { StudentService } from './student.service';
export * from './user.service';
import { UserService } from './user.service';
export const APIS = [CompanyService, EmployerService, JobApplicationService, JobOfferService, StudentService, UserService];

