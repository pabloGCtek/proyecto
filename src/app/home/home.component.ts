import { Component } from '@angular/core';
import { Artista } from 'src/assets/clases/Artista';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

   arrArtistas: Artista[] = [new Artista("pepe","AAAAAAAAAAAAAAAAAAAAA","eee"),new Artista("Juan","EEEEEE","eee")];
  NgOnInit(){
      this.arrArtistas.push(new Artista("pepe","AAAAAAAAAAAAAAAAAAAAA","eee"))
      alert(this.arrArtistas[0].nombre)
    }
}
