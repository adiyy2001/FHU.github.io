import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('cardsTranslate', [
      transition(':enter', [
        query('mat-card', style({ transform: 'translateX(100%)', opacity: '0' })),
        query('mat-card',
          stagger('500ms', [
            animate('500ms', style({ transform: 'translateX(0)', opacity: '1' }))
          ]))
      ])
    ]),
    trigger('imageTranslate', [
      transition(':enter', [
        query('img', style({ transform: 'translateX(-100%)', opacity: '0' })),
        query('img',
          stagger('100ms', [
            animate('1000ms', style({ transform: 'translateX(0)', opacity: '1' }))
          ]))
      ])
    ])
  ],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
