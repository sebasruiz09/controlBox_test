import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { HttpAdapter } from './adapters/http.adapter';

@Module({
  imports: [HttpModule],
  providers: [HttpAdapter],
  exports: [HttpAdapter],
})
export class CommonModule {}
