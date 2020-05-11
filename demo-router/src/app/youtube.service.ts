import {Injectable} from '@angular/core';
import {Video} from './Video';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  playlist: Video[] = [
    {id: 'wrEnIGUapbQ', song: 'Anh Thanh Niên Remix ❤️'},
    {id: 'HBYirj2c_jw', song: 'Deadpool 2 - Take on Me'},
    {id: 'N6O2ncUKvlg', song: 'Nelly - Just A Dream'},
    {id: 'uelHwf8o7_U', song: 'Eminem - Love The Way You Lie ft. Rihanna'},
    {id: 'WpYeekQkAdc', song: 'The Black Eyed Peas - Where Is The Love?'}
  ];


  constructor() {
  }

  find(id: string) {
    return this.playlist.find(item => item.id === id);
  }

  search(songName: string): Video[] {
    const result = this.playlist.filter(item => item.song.includes(songName));
    return result;
  }
}
