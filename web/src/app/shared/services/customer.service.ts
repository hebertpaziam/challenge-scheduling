import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs'

import { Customer } from '../models/customer.model'

import { CUSTOMERS } from '../mock'


@Injectable()
export class CustomerService {

    private url: string = '/api/customer'

    constructor(private http: Http) { }

    createCustomer(customer: Customer): Promise<Customer> {
        /*return this.http.post(`${this.url}/post`, JSON.stringify(customer)).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))*/

        CUSTOMERS.push(customer);
        return Promise.resolve(customer)
    }

    getCustomerById(customer: Customer): Promise<Customer> {
        /*return this.http.get(`${this.url}/${customer.id}`).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))*/

        return Promise.resolve(CUSTOMERS.find(obj => obj.id === customer.id))
    }

    getCustomers(): Promise<Customer[]> {
        /*return this.http.get(`${this.url}/list`).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))*/

        return Promise.resolve(CUSTOMERS);
    }

    updateCustomer(customer: Customer): Promise<Customer> {
        /*return this.http.put(`${this.url}/${customer.id}`, JSON.stringify(customer)).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))*/

        let foundIndex = CUSTOMERS.findIndex(obj => obj.id == customer.id);
        CUSTOMERS[foundIndex] = customer;
        return Promise.resolve(CUSTOMERS[foundIndex]);
    }

    deleteCustomer(customer: Customer): Promise<boolean> {
        /*return this.http.delete(`${this.url}/${customer.id}`).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error));*/

        let removed: boolean = false;
        try {
            let indexToRemove = CUSTOMERS.findIndex(obj => obj.id == customer.id);
            CUSTOMERS.splice(indexToRemove, 1)
            removed = true;
        } catch (e) {
            console.log("Object not removed")
            removed = false;
        }
        finally {
            return Promise.resolve(removed);
        }
    }

    extractData(response: Response): any {
        return response.json().data || response.json()
    }
    errorHandling(error: any): any {
        console.log(error)
    }

}