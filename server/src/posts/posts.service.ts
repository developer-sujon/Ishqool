import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { collectionNames } from 'src/common/collections.enum';
import { Post, PostDocument } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(collectionNames.POST) private postModel: Model<PostDocument>,
  ) {}

  async findRecentPosts(): Promise<Post[]> {
    const last7Days = new Date();
    last7Days.setDate(last7Days.getDate() - 7);

    return this.postModel.find({
      $or: [
        { createdAt: { $gte: last7Days } },
        { updatedAt: { $gte: last7Days } },
      ],
    });
  }
}
