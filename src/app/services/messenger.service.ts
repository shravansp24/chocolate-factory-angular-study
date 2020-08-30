import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();
  subjectRemove = new Subject();

  sendMessage(product) {
    this.subject.next(product);
  }

  getMessage() {
    return this.subject.asObservable();
  }

  sendMessageRemove(product) {
    this.subjectRemove.next(product);
  }

  getMessageRemove() {
    return this.subjectRemove.asObservable();
  }

  constructor() { }
}
