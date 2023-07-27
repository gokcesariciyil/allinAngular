import { Component } from '@angular/core';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent {
  inputValue: string = "";
  movies: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() { }


}
