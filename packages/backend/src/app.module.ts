import { Module } from '@nestjs/common';
import { RoomsModule } from './rooms/rooms.module';

@Module({
  imports: [RoomsModule],
})
export class AppModule {}