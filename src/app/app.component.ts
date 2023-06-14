import { Component, OnInit } from '@angular/core';
import { LoaderService } from './share/service/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  IslogIn!: boolean;
  title = 'Test1';
  constructor(private _loaderService: LoaderService) {}
  ngOnInit(): void {
    this._loaderService.isLogInStatus.subscribe((res) => {
      this.IslogIn = res;
      // console.log(this.IslogIn);

    });
  }
}
