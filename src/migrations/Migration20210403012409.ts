import { Migration } from '@mikro-orm/migrations';

export class Migration20210403012409 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "post" ("uuid" uuid not null, "title" text not null, "created_at" timestamptz(0) not null, "update_at" timestamptz(0) not null);');
    this.addSql('alter table "post" add constraint "post_pkey" primary key ("uuid");');
  }

}
