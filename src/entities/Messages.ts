import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm"
import { v4 as uuid } from 'uuid';

@Entity("messages")
class Message {
    @PrimaryGeneratedColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    message: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }
}

export { Message };