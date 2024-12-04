import { Controller, Get, Query } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { Room } from './room.model';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Get()
  getRooms(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '5',
  ): { rooms: Room[]; total: number } {
    return this.roomsService.findPaginated(Number(page), Number(limit));
  }
}
