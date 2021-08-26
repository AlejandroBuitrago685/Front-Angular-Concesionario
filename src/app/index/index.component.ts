import { Component, OnInit } from '@angular/core';
import { CocheServiceService } from '../Components/Car/coche-service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private carService:CocheServiceService) { }

  ngOnInit(): void {

    this.carService.ObtenerCoches().subscribe(
      p => console.log(p)
    );
    (error:any) => {
      console.log(error);
    }

  }

}
