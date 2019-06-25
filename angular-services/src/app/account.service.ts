import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()
export class AccountService {
  constructor(private logger: LoggingService){}

  public accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  stausUpdated =  new EventEmitter<string>();

  addAccount(name: string, status: string) {
    this.accounts.push({
      name: name,
      status: status
    });
    this.logger.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.logger.logStatusChange(status);
  }
}
