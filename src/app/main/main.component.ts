import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  username: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username');
  }
}
