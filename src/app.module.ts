import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './posts/posts.controller';
import { SockGateway } from './sock.gateway';

@Module({
  imports: [],
  controllers: [AppController, PostsController],
  providers: [AppService, SockGateway],
})
export class AppModule {}
