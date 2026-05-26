import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ContainerComponent } from '../../../shared/components/container/container.component';
import { BannerComponent } from '../../../shared/components/banner/banner.component';
import {MatSelectModule} from '@angular/material/select';
import { Container } from '../../../shared/components/container/container';
import { Banner } from '../../../shared/components/banner/banner';


@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [MatCardModule,MatFormFieldModule, MatLabel, MatButtonModule, MatInputModule,
    MatDatepickerModule, MatRadioModule,MatIconModule, MatDividerModule,MatNativeDateModule,
    MatCheckboxModule, MatSelectModule, Container, Banner
  ],
  templateUrl: './cadastro-usuario.html',
  styleUrl: './cadastro-usuario.css'
})
export class CadastroUsuarioComponent {
 

}