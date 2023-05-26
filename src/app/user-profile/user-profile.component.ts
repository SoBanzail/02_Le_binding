import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  User = {
    name: "Doe",
    firstName: "John",
    age: 25,
    quote: "Two beer or not to beer",
    photo: "https://randomuser.me/api/portraits/lego/2.jpg"
  };

  isHidden: boolean = false;

  constructor() {}

  ngOnInit() {}

  afficherMasquer() {
    this.isHidden = !this.isHidden;
  }
}
