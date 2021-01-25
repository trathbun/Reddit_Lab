import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Aww{
  title: string;
  author: string;
  image: string;
  link: string;
  ups: number;
  total_awards_received: number;
  }

@Injectable({
  providedIn: 'root'
})
export class RedditApiService {
  posts: Aww[] = [];
  
  constructor(private http: HttpClient) { }

    getPosts():void{
    
      const url = "https://www.reddit.com/r/aww/.json"
      
      this.http.get(url).subscribe(
     
        (data: any) => {

          const posts = data.data.children;

           for (let post of posts) {

             const redditPost:Aww = {
               title: post.data.title,
               author: post.data.author,
               ups: post.data.ups, 
               total_awards_received: post.data.total_awards_received,
               link: "https://reddit.com" + post.data.permalink,
               image: post.data.thumbnail,
             };
            
             this.posts.push(redditPost);
             //console.log(posts.title);

           }

           //console.log(posts.title);
        
        },
        (error) => {
          console.log(error);
        }
      );
      }
    }
  
