//variavel para configurar o endereço da API
export const apiProdutos = "http://localhost:8081";
export const apiUsuario = "http://localhost:8082"

//mapeamento de cada endpoint da API
export const endpoints = {
    cadastrar_produtos : `${apiProdutos}/api/produtos/cadastrar`,
    atualizar_produtos : `${apiProdutos}/api/produtos/atualizar`,
    excluir_produtos : `${apiProdutos}/api/produtos/excluir`,
    consultar_produtos : `${apiProdutos}/api/produtos/consultar`,
    obter_produto : `${apiProdutos}/api/produtos/obter`,
    consultar_categorias : `${apiProdutos}/api/categorias/consultar`,
    dashboard_categorias : `${apiProdutos}/api/dashboard/produtos-categoria`,
    autenticar_usuario : `${apiUsuario}/api/usuario/autenticar`,
    criar_usuario : `${apiUsuario}/api/usuario/criar`
};