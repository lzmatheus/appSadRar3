import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Sobre', url: '/about', icon: 'information-circle' },
    { title: 'Contatos', url: '/folder/favorites', icon: 'heart' },
    { title: 'Sua Privacidade', url: '/policies', icon: 'document-lock' }
    
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
