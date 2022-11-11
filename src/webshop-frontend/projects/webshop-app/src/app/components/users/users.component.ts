import { Component, OnInit } from '@angular/core';
import { User } from './users.interfaces';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  public resultsLength = 0;
  public displayedColumns: string[] = ['userName', 'firstName', 'lastName', 'email' ];
  public users: User[] = [
    {
      userName: 'mad_max',
      firstName: 'Max',
      lastName: 'Mustermann',
      email: 'maxmu@online.de'
    },
    {
      userName: 'joe666',
      firstName: 'Joe',
      lastName: 'Jordison',
      email: 'joe-y@online.de'
    },
    {
      userName: 'freeenk',
      firstName: 'Frank',
      lastName: 'Bleck',
      email: 'frable@online.de'
    },
    {
      userName: 'erika',
      firstName: 'Erika',
      lastName: 'Müller',
      email: 'erikaller@online.de'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
