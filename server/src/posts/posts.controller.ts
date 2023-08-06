// post.controller.ts
import { Controller, Get } from '@nestjs/common';
import { Post } from './entities/post.entity';
import { PostService } from './posts.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('recent')
  async findRecentPosts(): Promise<Post[]> {
    return this.postService.findRecentPosts();
  }
}
