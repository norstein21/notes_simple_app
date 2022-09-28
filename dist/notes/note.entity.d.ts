import { BaseEntity } from 'typeorm';
export declare class Note extends BaseEntity {
    id: number;
    title: string;
    description: string;
}
