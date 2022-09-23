import { Module } from '@nestjs/common';
import { FitHelperApiMacroController } from './fit-helper-api--macro.controller';
import { FitHelperApiMacroService } from './fit-helper-api--macro.service';

@Module({
  controllers: [FitHelperApiMacroController],
  providers: [FitHelperApiMacroService],
  exports: [FitHelperApiMacroService],
})
export class FitHelperApiMacroModule {}
