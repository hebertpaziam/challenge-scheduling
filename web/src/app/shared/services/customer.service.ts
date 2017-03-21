import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs'

import { Customer } from '../models/customer.model'


@Injectable()
export class CustomerService {

    private url: string = '/api/customer'

    constructor(private http: Http) { }

    createCustomer(customer: Customer): Promise<Customer> {
        return this.http.post(`${this.url}/post`, JSON.stringify(customer)).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))
    }

    getCustomerById(customer: Customer): Promise<Customer> {
        return this.http.get(`${this.url}/${customer.id}`).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))
    }

    getCustomers(): Promise<Customer[]> {
        return this.http.get(`${this.url}/list`).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))
    }

    updateCustomer(customer: Customer): Promise<Customer> {
        return this.http.put(`${this.url}/${customer.id}`, JSON.stringify(customer)).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))
    }

    deleteCustomer(customer: Customer): Promise<boolean> {
        return this.http.delete(`${this.url}/${customer.id}`).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error));
    }

    extractData(response: Response): any {
        return response.json().data || response.json()
    }
    errorHandling(error: any): any {
        console.log(error)
    }

}