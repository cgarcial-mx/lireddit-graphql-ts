import { Post } from "./entities/Post";
import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from "./constants";
import path from 'path';

export default {
  migrations: {
    path: path.join(__dirname, './migrations'), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post],
  dbName: "lireddit",
  debug: !__prod__,
  type: "postgresql",
  user: "postgres",
  password: "somePassword",
} as Parameters<typeof MikroORM.init>[0];

