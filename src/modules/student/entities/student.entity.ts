import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from 'typeorm';
import { PostTest } from '../../post-test/entities/post-test.entity';
import { PreTest } from '../../pre-test/entities/pre-test.entity';
import { MailList } from '../../mail-list//entities/mail-list.entity';
import { VocationalTest } from '../../vocational-test/entities/vocational-test.entity';

@Entity('student')
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    email: string;

    @Column({ nullable: false })
    password: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ default: "" })
    recCareer: string;

    @Column({ default: "" })
    group: string;

    @Column({ default: false })
    preTestCompl: boolean;

    @Column({ default: false })
    postTestCompl: boolean;

    @Column({ default: false })
    vocationalTestCompl: boolean;

    @OneToMany(() => VocationalTest, (vocationalTest) => vocationalTest.student)
    vocationalTests: VocationalTest[];

    @OneToOne(() => PreTest, (preTest) => preTest.student)
    preTest: PreTest;

    @OneToOne(() => PostTest, (postTest) => postTest.student)
    postTest: PostTest;

    @OneToOne(() => MailList, (mailList) => mailList.student)
    mailList: MailList;
}