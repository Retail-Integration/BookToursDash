import { Injectable } from '@angular/core';
import { SmartTableData } from '../data/smart-table';

@Injectable()
export class SmartTableService extends SmartTableData {

  data = [{
    id: 1,
    firstName: 'Mark',
    lastName: 'Otto',
    role: 'staff',
    email: 'mdo@gmail.com',
    age: '28',
  }, {
    id: 2,
    firstName: 'Jacob',
    lastName: 'Thornton',
    role: 'staff',
    email: 'fat@yandex.ru',
    age: '45',
  }, {
    id: 3,
    firstName: 'Larry',
    lastName: 'Bird',
    role: 'manager',
    email: 'twitter@outlook.com',
    age: '18',
  }, {
    id: 4,
    firstName: 'John',
    lastName: 'Snow',
    role: 'manager',
    email: 'snow@gmail.com',
    age: '20',
  }, {
    id: 5,
    firstName: 'Jack',
    lastName: 'Sparrow',
    role: 'readonly',
    email: 'jack@yandex.ru',
    age: '30',
  }, {
    id: 6,
    firstName: 'Ann',
    lastName: 'Smith',
    role: 'readonly',
    email: 'ann@gmail.com',
    age: '21',
  },
];

  getData() {
    return this.data;
  }
}
