/**
 * Student Jobs API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { User } from './user';

export interface Student extends User { 
    dateOfBirth?: string;
    driverLicense?: boolean;
    /**
     * education level. Define an enum (college, highschool..)
     */
    education?: string;
    school?: string;
    /**
     * in DB, this is one string in csv list format
     */
    languages?: Array<string>;
    linkedin?: string;
    /**
     * concat of city+governorate
     */
    location?: string;
}