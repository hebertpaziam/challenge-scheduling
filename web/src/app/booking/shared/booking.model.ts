import { IBooking } from './booking.interface';

import { Project } from '../../project/shared/project.model';
import { Professional } from '../../professional/shared/professional.model';

export class Booking implements IBooking {
    id: number;
    startDate: Date;
    endDate: Date;
    percentual: number;
    projectId: number;
    professionalId: number;
    deleted: boolean;
    project: Project;
    professional: Professional;
}