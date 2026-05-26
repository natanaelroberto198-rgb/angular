import { Component, inject , OnInit } from '@angular/core';
import { CardFilme } from '../card-filme/card-filme';
import { MatButtonModule } from '@angular/material/button';
import { Container } from '../container/container';
import { Filme } from '../../../core/model/filme';
import { FilmeService } from '../../../core/services/filme-service';
import { AsyncPipe } from '@angular/common';
import{Observable, of} from 'rxjs'


@Component({
  selector: 'app-em-cartaz',
  imports: [CardFilme,Container,AsyncPipe],
  templateUrl: './emcartaz.html',
  styleUrl: './emcartaz.css',

})

export class EmCartazComponent  implements OnInit{
 private filmeService = inject(FilmeService)

 filme: Observable<Filme[]> = of([]);

 ngOnInit(): void {
   this.filme= this.filmeService.findEmCartaz();
 }
}
