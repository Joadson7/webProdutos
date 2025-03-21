import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subscriber } from 'rxjs';
import { endpoints } from '../../../configurations/environment';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-consulta-produtos',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './consulta-produtos.component.html',
  styleUrl: './consulta-produtos.component.css'
})
export class ConsultaProdutosComponent {

  produtos: any[] = [];
  mensagem: string = '';

  constructor(private http: HttpClient) { }

  form  = new FormGroup({
      nome : new FormControl('')
  });

onSubmit(){
  this.http.get(`${endpoints.consultar_produtos}/${this.form.value.nome}`)
  .subscribe({
    next: (data) => {
      
      this.produtos = data as any[];
    }
  })
}

onDelete(id: string) {
  if(confirm('Deseja realmente excluir o produto selecionado?')){
    this.http.delete(`${endpoints.excluir_produtos}/${id}`, { responseType: 'text'})
      .subscribe({
        next: (data) => {
          this.mensagem = data;
          this.onSubmit();
        }
      })
  }

}

}
