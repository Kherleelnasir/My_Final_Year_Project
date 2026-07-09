import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HeaderService {
  private titleSubject = new BehaviorSubject<string>('Operations Dashboard');
  private subtitleSubject = new BehaviorSubject<string>('');

  readonly title$ = this.titleSubject.asObservable();
  readonly subtitle$ = this.subtitleSubject.asObservable();

  setTitle(title: string) {
    this.titleSubject.next(title);
  }

  setSubtitle(subtitle: string) {
    this.subtitleSubject.next(subtitle);
  }

  clear() {
    this.titleSubject.next('Operations Dashboard');
    this.subtitleSubject.next('');
  }
}
