import { Component } from '@angular/core';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  inputValue: string = "";
  movies: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() { }

  getMovie() {
    this.movies = []
    this.dataService.getMovies(this.inputValue).subscribe(data => {
      this.movies.push(data);
    });
  }
}
