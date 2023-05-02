import { BaseEntity } from 'typeorm';
export declare class Error extends BaseEntity {
    id: number;
    timeTakenMs: number;
    created_at: Date;
}
