import { MongoClient, Db, FindAndModifyWriteOpResultObject, InsertOneWriteOpResult } from 'mongodb';

import { Allocation } from '../domain/allocation';
import { ICrud } from './crud.interface';
import { Connection } from './connection';

import { ALLOCATIONS } from '../../app/shared/mock';

export class AllocationPersistence implements ICrud<Allocation> {

    list(): Promise<Allocation[]> {
        let database: Db;
        return Promise.resolve(
            Connection.conn()
                .then((db: Db) => {
                    database = db;

                    return db.collection('allocation').find({ deleted: false }).toArray();
                })
                .then((allocations: Allocation[]) => {
                    database.close();

                    return allocations;
                })
        );
    }

    read(id: number): Promise<Allocation> {
        let database: Db;
        return Promise.resolve<Allocation>(
            Connection.conn()
                .then((db: Db) => {
                    database = db;
                    return db.collection('allocation').findOne({ id: id, deleted: false })
                        .then((result: Allocation) => { return result; });
                })
                .then((allocation: Allocation) => {
                    database.close();

                    return allocation as Allocation;
                }));
    }

    create(allocation: Allocation): Promise<Allocation> {
        let database: Db;
        let sequence: number;

        return Promise.resolve<Allocation>(
            Connection.getNextSequence('allocationId')
                .then((retrievedSequence: number) => {
                    sequence = retrievedSequence;
                    return Connection.conn();
                })
                .then((db: Db) => {
                    database = db;

                    return db.collection('allocation').insertOne({
                        id: sequence,
                        startDate: allocation.startDate,
                        endDate: allocation.endDate,
                        percentual: allocation.percentual,
                        projectId: +allocation.projectId,
                        professionalId: +allocation.professionalId,
                        project: null,
                        professional: null,
                        deleted: allocation.deleted
                    })
                })
                .then((insertResult: InsertOneWriteOpResult) => {
                    if (insertResult.result.ok == 1) {
                        let savedAllocation: Allocation = insertResult.ops[0] as Allocation;

                        return savedAllocation;
                    }
                    else {
                        return Promise.reject<Allocation>(Error("An error ocurred when trying to create a new record"));
                    }
                })
        );
    }

    update(allocation: Allocation): Promise<Allocation> {
        let database: Db;

        return Promise.resolve<Allocation>(
            Connection.conn()
                .then((db: Db) => {
                    database = db;
                    return db.collection('allocation').findOneAndUpdate({ id: allocation.id }, {
                        id: allocation.id,
                        startDate: allocation.startDate,
                        endDate: allocation.endDate,
                        percentual: allocation.percentual,
                        projectId: +allocation.projectId,
                        professionalId: +allocation.professionalId,
                        project: null,
                        professional: null,
                        deleted: allocation.deleted
                    }, { returnOriginal: false });
                })
                .then((updateResult: FindAndModifyWriteOpResultObject) => {
                    database.close();

                    if (updateResult.ok == 1)
                        return updateResult.value;
                    else
                        return Error("An error ocurred while triyng to update a record");
                }));
    }

    delete(id: number): Promise<boolean> {
        let database: Db;
        return Connection.conn()
            .then((db: Db) => {
                database = db;

                return db.collection('allocation').findOneAndUpdate(
                    { id: id },
                    { $set: { 'deleted': true } });
            })
    }
}