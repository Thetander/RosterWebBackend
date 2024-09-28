import { Controller } from '@nestjs/common';

@Controller('employeed')
export class EmployeedController {
  

  constructor() {
    console.log('EmployeedController instantiated');
  }
}

