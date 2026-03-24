import { Component } from '@angular/core';
import { CardFilme } from '../card-filme/card-filme';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-em-cartaz',
  imports: [CardFilme,MatButtonModule],
  templateUrl: './em-cartaz.html',
  styleUrl: './em-cartaz.css',
})
export class EmCartaz {

}
