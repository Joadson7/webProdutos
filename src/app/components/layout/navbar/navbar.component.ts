import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

    isAuthenticated: boolean = false;
    nome: String = '';
    email: String = '';
    perfil: string = '';

    ngOnInit() {
      if(sessionStorage.getItem('usuario') != null) {
        this.isAuthenticated = true;

        var data = sessionStorage.getItem('usuario') as string;
        var json = JSON.parse(data);

        this.nome = json.nome;
        this.email = json.email;
        this.perfil = json.perfil;
      }
    }

    logout(){

      if(window.confirm('Deseja realmente sair do sistema?')) {
        sessionStorage.removeItem('usuario');

        location.href = '/pages/autenticar-usuario';
      }
    }
}
