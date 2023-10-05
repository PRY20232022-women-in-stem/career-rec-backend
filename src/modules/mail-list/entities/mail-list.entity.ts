import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Student } from '../../student/entities/student.entity';

@Entity('mail_list')
export class MailList {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    email: boolean;

    @OneToOne(() => Student, (student) => student.mailList, { nullable: true })
    @JoinColumn()
    student: Student;
}