import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs'

import { Allocation } from '../models/allocation.model'

import { ALLOCATIONS } from '../mock'


@Injectable()
export class AllocationService {

    private url: string = '/api/allocation'

    constructor(private http: Http) { }

    createAllocation(allocation: Allocation): Promise<Allocation> {
        /*return this.http.post(`${this.url}/post`, JSON.stringify(allocation)).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))*/

        ALLOCATIONS.push(allocation);
        return Promise.resolve(allocation)
    }

    getAllocationById(allocation: Allocation): Promise<Allocation> {
        /*return this.http.get(`${this.url}/${allocation.id}`).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))*/

        return Promise.resolve(ALLOCATIONS.find(obj => obj.id === allocation.id))
    }

    getAllocations(): Promise<Allocation[]> {
        /*return this.http.get(`${this.url}/list`).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))*/

        return Promise.resolve(ALLOCATIONS);
    }

    updateAllocation(allocation: Allocation): Promise<Allocation> {
        /*return this.http.put(`${this.url}/${allocation.id}`, JSON.stringify(allocation)).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))*/

        let foundIndex = ALLOCATIONS.findIndex(obj => obj.id == allocation.id);
        ALLOCATIONS[foundIndex] = allocation;
        return Promise.resolve(ALLOCATIONS[foundIndex]);
    }

    deleteAllocation(allocation: Allocation): Promise<boolean> {
        /*return this.http.delete(`${this.url}/${allocation.id}`).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error));*/

        let removed: boolean = false;
        try {
            let indexToRemove = ALLOCATIONS.findIndex(obj => obj.id == allocation.id);
            ALLOCATIONS.splice(indexToRemove, 1)
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