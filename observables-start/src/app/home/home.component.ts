import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable  } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  numberSubscription: Subscription;
  customSubscription: Subscription

  constructor() { }

  ngOnInit() {
    // Predefined observables oprators.
    const myNumbers = Observable.interval(1000)
    // transform data from one observable and return a new observable.
    .map((data: number) => { return data * 2});

    this.numberSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    // Custom observables.
    const myObservable = Observable.create((observer : Observer<String>) => {
      setTimeout(() => {
        observer.next('first packgae');
      }, 2000),
      setTimeout(() => {
        observer.next('second packgae');
      }, 4000),
      setTimeout(() => {
        observer.next('third packgae');
      }, 6000),
      setTimeout(() => {
        observer.complete();
      }, 7000),
      setTimeout(() => {
        observer.next('fourth packgae');
      }, 8000),
      setTimeout(() => {
        observer.error('this does not work');
      }, 9000)
    });

    this.customSubscription = myObservable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (error: string) => {
        console.log(error);
      },
      () => {
        console.log('completed');
      },
    );
  }

  ngOnDestroy() {
    this.numberSubscription.unsubscribe();
    this.customSubscription.unsubscribe();
  }

}
