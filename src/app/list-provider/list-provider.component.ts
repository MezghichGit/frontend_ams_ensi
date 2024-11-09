import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-list-provider',
  templateUrl: './list-provider.component.html',
  styleUrl: './list-provider.component.css'
})
export class ListProviderComponent implements OnInit{

  providers:any;

  public constructor(private providerService:ProviderService){
    console.log("Constructeur")
    }

    ngOnInit(): void {
      console.log("ngOnInit")
      this.providerService.listProviders().subscribe(
        data=>{
          console.log(data);
          this.providers = data;
        }
      );
    }
}
