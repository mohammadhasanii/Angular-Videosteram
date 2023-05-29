import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-videosteam';
  wallpaperUrl: string =
    'https://assets.materialup.com/uploads/9a76902c-c79c-46c8-afd6-b9f949e9d3c3/preview.gif';
  videoSource: string | null = null;
  temporyUrl: string | null = null;

  getUrl(data: any): void {
    this.temporyUrl = data;
  }

  checkPlayVideo(): void {
    if (this.temporyUrl) {
      this.videoSource = this.temporyUrl;
    }
  }
  newVideo() {
    this.videoSource = null;
    this.temporyUrl = null;
  }
}
