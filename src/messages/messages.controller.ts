import { Controller, Get } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private messasService: MessagesService) {}

  @Get()
  findAll() {
    return this.messasService.findAll();
  }
}
