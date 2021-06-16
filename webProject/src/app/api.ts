export * from '../app/services/company.service';
import { CompanyService } from '../app/services/company.service';
export * from '../app/services/employer.service';
import { EmployerService } from '../app/services/employer.service';
export * from '../app/services/job-application.service';
import { JobApplicationService } from '../app/services/job-application.service';
export * from '../app/services/job-offer.service';
import { JobOfferService } from '../app/services/job-offer.service';
export * from '../app/services/student.service';
import { StudentService } from '../app/services/student.service';
export * from '../app/services/user.service';
import { UserService } from '../app/services/user.service';
export const APIS = [CompanyService, EmployerService, JobApplicationService, JobOfferService, StudentService, UserService];

