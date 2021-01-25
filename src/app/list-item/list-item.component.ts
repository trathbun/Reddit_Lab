import { Component, Input, OnInit } from '@angular/core';
import { RedditApiService } from '../reddit-api.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
  providers: [RedditApiService]
})
export class ListItemComponent implements OnInit {
  constructor(public redditAPI: RedditApiService) {}
  @Input() post: any;

  ngOnInit(): void {
    //this.redditApi.getPost();
  }

}
