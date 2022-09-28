import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { NotesModule } from './notes/note_module';
import { DataSource } from 'typeorm';

// I know this shouldn't be quite correct but I swear it works lol
const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'notes_app',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
});

dataSource
  .initialize()
  .then(() => console.log('Initialization success!! FIRA U BELIKAN I TONGSENG'))
  .catch((err) =>
    console.error('Error during Data Source initialization!', err),
  );

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'notes_app',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    NotesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
