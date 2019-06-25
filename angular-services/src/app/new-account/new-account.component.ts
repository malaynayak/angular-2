import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../account.service'

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {

  constructor(private accountService: AccountService) {
    this.accountService.stausUpdated.subscribe(
      (status:string) => alert('New Status ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
  }
}
