import { Usuario } from './../models/Usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  public buscarTodos(pagina: number) {
    if (pagina <= 0) {
      pagina = 1;
    }

    return this.http.get(`${this.url}?page=${pagina}`);
  }

  // Buscamos onde vamos receber o id
  public buscarId(id: number) {
    return this.http.get(`${this.url}/${id}`) // Vamos passar a url com o id que recebemos 
  }

  public cadastrar(usuario: Usuario) {
    return this.http.post(this.url, usuario);
  }

  public alterar(usuario: Usuario) {
    return this.http.put(`${this.url}/${usuario.id}`, usuario)
  }
}
