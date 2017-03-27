import { Allocation } from '../domain/allocation';
import { AllocationPersistence } from '../persistence/allocation.persistence';

export class AllocationApplication {
    constructor(private allocationPersistence: AllocationPersistence = new AllocationPersistence()) { }

    getAllocations(): Promise<Allocation[]> {
        return this.allocationPersistence.list();
    }

    getAllocation(id: number): Promise<Allocation> {
        return this.allocationPersistence.read(id);
    }    

    saveAllocation(allocation: Allocation): Promise<Allocation> {
        return this.allocationPersistence.update(allocation);
    }

    createAllocation(allocation: Allocation): Promise<Allocation> {
        allocation.deleted = false;

        return this.allocationPersistence.create(allocation);
    }

    deleteAllocation(id: number): Promise<boolean> {
        return this.allocationPersistence.delete(id);
    }
}