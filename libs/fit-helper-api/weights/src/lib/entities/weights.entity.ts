import { Users } from '@fithelper/fit-helper-api//users';
import { Expose } from 'class-transformer';

import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'Weight',
})
export class Weight extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Expose()
  id: string;

  @Column({ type: 'int', name: 'weight' })
  @Expose()
  weight: number;

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

  @ManyToOne(() => Users, (user) => user.weight)
  user: Users;
}
