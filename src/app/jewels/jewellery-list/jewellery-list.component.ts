import { Component } from '@angular/core';
import { StoreService } from '../provider/store.service';

@Component({
  selector: 'jewellery-list',
  templateUrl: './jewellery-list.component.html',
  styleUrls: ['./jewellery-list.component.css']
})
export class JewelleryListComponent {
  columnsToDisplay = ['idArticolo', 'img', 'nome_art', 'descr', 'statoElab', 'actions'];
 // "idArticolo": "001", "codArt": "anello_fidanzamento", "nome_art": "Anello di fidanzamento", "ext": ".png", "descr
  dataSource: any;
  message: any;
  idJ: any;
  constructor(
    private storeService: StoreService,
  ) {}

  ngOnInit(): void {
    this.showList();
  }

  /** Jewellery List */
  showList() {
    this.storeService.getJewelleryList()
      .subscribe({
        next: response => {
          this.dataSource = response.articoli;
        },
        error: (error: any) => {
          this.message = 'not-available';
        }
      });
  }

}