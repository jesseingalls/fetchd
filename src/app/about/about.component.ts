import { Component, OnInit } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  youtubeUrl = 'https://www.youtube.com/watch?v=T3wmW3RZBok';
  ytIframeHtml: any;

  constructor(private embedService: EmbedVideoService) {
    this.ytIframeHtml = this.embedService.embed(this.youtubeUrl);
   }

  ngOnInit() {
  }

}
