import {Component, OnInit} from '@angular/core';
import {YoutubeService} from '../youtube.service';
import {Video} from '../Video';

@Component({
  selector: 'app-youtube-playlist',
  templateUrl: './youtube-playlist.component.html',
  styleUrls: ['./youtube-playlist.component.scss']
})
export class YoutubePlaylistComponent implements OnInit {

  keySearch = '';
  private listVideo: Video[] = this.youtubeService.playlist;

  constructor(public youtubeService: YoutubeService) {
  }

  searchSong() {
    console.log(this.keySearch);
    if (this.keySearch === '') {
      this.listVideo = this.youtubeService.playlist;
    } else {
      this.listVideo = this.youtubeService.search(this.keySearch);
    }
  }

  ngOnInit() {
  }
}
