import { Expose } from 'class-transformer';
import * as bcrypt from 'bcrypt';

import {
  BaseEntity,
  BeforeInsert,
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

  @Column({ type: 'varchar', length: 100, nullable: true })
  @Expose()
  email: string;

  @Column({ type: 'varchar', nullable: true })
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

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(
      this.password,
      Number(process.env.HASH_SALT)
    );
  }

  //TODO: relation with weight
  //oneToMany
}
