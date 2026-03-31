import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Filme } from '../../../core/model/filme';
@Component({
  selector: 'app-card-filme',
  imports: [MatCardModule],
  templateUrl: './card-filme.html',
  styleUrl: './card-filme.css',
})
export class CardFilme {
  @Input() filme!: Filme;

}
