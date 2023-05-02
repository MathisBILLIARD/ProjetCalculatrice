import { BaseEntity, Column, Entity, PrimaryGeneratedColumn , CreateDateColumn } from 'typeorm';

@Entity('calculatrice')
export class Succes extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    timeTakenMs: number;

    @CreateDateColumn()
    created_at: Date;
}
    
