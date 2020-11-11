import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor() { }

  users = [
    { id: 1, name: "vinay", city: "banglore", age: 21 },
    { id: 2, name: "sanjay", city: "chennai", age: 22 },
    { id: 3, name: "vinod", city: "mumbai", age: 34 },
    { id: 4, name: "mahesh", city: "pune", age: 30 },
    { id: 5, name: "dinesh", city: "pune", age: 24 },
    { id: 6, name: "mohan", city: "banglore", age: 21 },
    { id: 7, name: "priya", city: "chennai", age: 22 },
    { id: 8, name: "moni", city: "mumbai", age: 34 },
    { id: 9, name: "madhu", city: "pune", age: 30 },
    { id: 10, name: "suresh", city: "banglore", age: 24 }
  ];

  ngOnInit() {
  }

  alertDetail(name, city, age) {
    // Template Strings
    let secondApproach = `${age} years old ${name} is from ${city}`
    alert(secondApproach)
  }

  showBanglorGuys() {
    let result = this.users.filter(
      (item) => {
        return item.age == 24
      }
    )
    console.log(result)
  }

  showAllGuys() {
    this.users.map((item) => {
      item.name = 'Changed'
    })
  }

  findAGuy() {
    let result = this.users.find((item) => {
      return item.age == 24
    })
    console.log(result)
  }

}
