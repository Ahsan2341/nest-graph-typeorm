import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
export const pgConfig: PostgresConnectionOptions = {
  url: 'postgresql://neondb_owner:npg_A0Cyi4djcvqH@ep-green-rain-ah68ksjs-pooler.c-3.us-east-1.aws.neon.tech/nest-graph-db?sslmode=require&channel_binding=require',
  type: 'postgres',
  port: 3306,
  entities: [__dirname+'/**/*.entity{.ts,.js}'],
  synchronize: true,
};
