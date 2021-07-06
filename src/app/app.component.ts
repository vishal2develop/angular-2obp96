import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Selected: string = '';
  listArray = [
    {
      name:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    }
  ];

  listArrayManyElements = [
    {
      name:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    { name: 'rrrrrrrrrrrrrrrrrrrtttttttttttttttttttttt' },
    { name: 'dsfvdcsfgdsgfdhghfjfhjhgjkgkjljkhjl;;jklkjjk;j' }
  ];
  ngOnInit() {
    this.Selected = '';
  }
}
