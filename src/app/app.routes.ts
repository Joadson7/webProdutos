import { Routes } from '@angular/router';
import { CadastroProdutosComponent } from './components/pages/cadastro-produtos/cadastro-produtos.component';
import { ConsultaProdutosComponent } from './components/pages/consulta-produtos/consulta-produtos.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { EdicaoProdutosComponent } from './components/pages/edicao-produtos/edicao-produtos.component';
import { AutenticarUsuarioComponent } from './components/pages/autenticar-usuario/autenticar-usuario.component';
import { CriarUsuarioComponent } from './components/pages/criar-usuario/criar-usuario.component';

// Configuração de rotas
export const routes: Routes = [
    {
        path: 'pages/autenticar-usuario',
        component: AutenticarUsuarioComponent
    }
    ,
    {
        path: 'pages/criar-usuario',
        component: CriarUsuarioComponent
    }
    ,
    {
        path: 'pages/dashboard',
        component: DashboardComponent
    },
    {
        path: 'pages/cadastro-produtos', //ROTA
        component: CadastroProdutosComponent //COMPONENTE
    },
    {
        path: 'pages/consulta-produtos',
        component: ConsultaProdutosComponent
    },
    {
        path: 'pages/edicao-produtos/:id',
        component: EdicaoProdutosComponent
    },
    {
        path: '', pathMatch: 'full',
        redirectTo: 'pages/autenticar-usuario'
    }
];
