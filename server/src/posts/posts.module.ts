import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { collectionNames } from 'src/common/collections.enum';
import { PostSchema } from './entities/post.entity';
import { PostController } from './posts.controller';
import { PostService } from './posts.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: collectionNames.POST, schema: PostSchema },
    ]),
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class PostsModule {}
