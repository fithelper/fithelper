import { Controller } from '@nestjs/common';
import { FitHelperApiMacroService } from './fit-helper-api--macro.service';

@Controller('fit-helper-api--macro')
export class FitHelperApiMacroController {
  constructor(private fitHelperApiMacroService: FitHelperApiMacroService) {}
}
