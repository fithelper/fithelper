import { Expose } from 'class-transformer';

import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'Users',
})
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Expose()
  id: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  @Expose()
  email: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  @Expose()
  password: string;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
  })
  @Expose()
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updated_at',
  })
  @Expose()
  updatedAt: Date;

  @DeleteDateColumn({
    type: 'timestamp',
    name: 'delete_at',
  })
  @Expose()
  deleteAt: Date;
}
