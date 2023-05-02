import { BaseEntity, Column, Entity, PrimaryGeneratedColumn , CreateDateColumn } from 'typeorm';

@Entity('error')
export class Error extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    timeTakenMs: number;

    @CreateDateColumn()
    created_at: Date;
}
    
