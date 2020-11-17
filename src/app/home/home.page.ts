import { UserService } from './../services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public listaUsuarios: any = [];
  public pagina = 1;
  public totalpaginas = 1;

  constructor(private userService: UserService) {}

  ionViewDidEnter(){
    this.buscarUsuarios(1); // busque a primeira página de usuários para mim
  }
  public buscarUsuarios(pagina: number) {
    if (pagina <= 0) {
      pagina = 1;
    }
    this.pagina = pagina;

    this.userService.buscarTodos(pagina).subscribe(dados => {
      this.listaUsuarios = dados['data'];
      this.totalpaginas = dados['total_pages'];
      console.log("Lista", this.listaUsuarios);
    })
  }
}
