import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './posts/posts.module';

const MONGODB_URL =
  process.env.MONGODB_URL ||
  'mongodb+srv://developer-sujon:developer-sujon@cluster0.mtzsh.mongodb.net/posts';

@Module({
  imports: [
    MongooseModule.forRoot(MONGODB_URL, {
      connectionFactory: (connection) => {
        return connection;
      },
    }),
    PostsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
