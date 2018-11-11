export interface IEmployee {
    code: string;
    name: string;
    gender: string;
    annualSalary: number;
    dateOfBirth: string;
    // To make a property optional use a ?
    // A class that implements this interface need
    // not provide implementation for this property
    //department?: string;
}