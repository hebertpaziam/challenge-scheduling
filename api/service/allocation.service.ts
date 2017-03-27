import { Router, Response, Request } from 'express';
import { Allocation } from '../domain/allocation';
import { AllocationApplication } from '../application/allocation.application';

export const allocationRouter: Router = Router();

allocationRouter.get('/list', (request: Request, response: Response) => {
    let allocationApplication: AllocationApplication = new AllocationApplication();

    allocationApplication.getAllocations()
        .then((result: Allocation[]) => {
            response.json(result);
        });
});

allocationRouter.get('/:id', (request: Request, response: Response) => {
    let allocationApplication: AllocationApplication = new AllocationApplication();

    let id: number = +request.params.id;

    allocationApplication.getAllocation(id)
        .then((allocation: Allocation) => {
            response.json(allocation);
        })
});

allocationRouter.post('/post', (request: Request, response: Response) => {
    let allocationApplication: AllocationApplication = new AllocationApplication();

    allocationApplication.createAllocation(request.body.allocation)
        .then((allocationSaved: Allocation) => {
            response.json(allocationSaved);
        })
});

allocationRouter.put('/:id', (request: Request, response: Response) => {
    let allocationApplication: AllocationApplication = new AllocationApplication();

    allocationApplication.saveAllocation(request.body.allocation)
        .then((allocationSaved: Allocation) => {
            response.json(allocationSaved);
        });
});

allocationRouter.delete('/delete/:id', (request: Request, response: Response) => {
    let allocationApplication: AllocationApplication = new AllocationApplication();

    let id: number = +request.params.id;

    allocationApplication.deleteAllocation(id)
        .then((result: boolean) => {
            response.json(result);
        });
});