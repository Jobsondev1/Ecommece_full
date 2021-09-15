    1. Introdução do Projeto
        i. uma loja virtual
        ii. frontend (reactjs, reudux, )
        iii. Backend (node js,)
        iv. banco não relaciona (mongodb)
    2. Ferramentas de instalação
        i. Editor de Código
        ii. Navegador da web
        iii. Extensão de código VS
    3. Modelo de site
        i. Criar pasta Ecommece_full
        ii. criar pasta de modelos
        iii. criar index.html
        iv. adicionar código HTML padrão
        v. link para style.css
        vi. criar cabeçalho, principal e rodapé
        vii. elementos de estilo
    4. Exibir produtos
        i. criar produtos div
        ii. adicionar atributos do produto
        iii. adicionar link, imagem, nome e preço
    5. Criar aplicativo React
        i. front-end npx create-react-app
        ii. npm start
        iii. Remover arquivos não usados
        iv. copie o conteúdo de index.html para App.js
        v. copie o conteúdo style.css para index.css
        vi. substitua a classe por className
    6. Compartilhar código no Github
        i. Inicializar repositório git
        ii. Confirmar alterações
        iii. Criar conta no github
        iv. Criar repositório no github
        v. conectar repo local ao repo github
        vi. enviar mudanças para o github
    7. Criar Classificação e Componente de Produto
        i. criar componentes / Rating.js
        ii. criar div.rating
        iii. estilo div.rating, span e último span
        iv. Criar componente de produto
        v. Use o componente de classificação
    8. Criar tela de produto
        i. Instalar react-router-dom
        ii. Use BrowserRouter e Route para a tela inicial
        iii. Criar HomeScreen.js
        iv. Adicione o código da lista de produtos lá
        v. Criar ProductScreen.js
        vi. Adicionar nova rota dos detalhes do produto ao App.js
        vii. Crie 3 colunas para imagem, informação e ação do produto
    9. Criar servidor Node.JS
        i. execute npm init na pasta raiz
        ii. Atualizar tipo de conjunto package.json: módulo
        iii. Adicionar .js às importações
        iv. npm install express
        v. criar server.js
        vi. adicione o comando start como node backend / server.js
        vii. requer expresso
        viii. criar rota para / back-end de retorno está pronto.
        ix. mover products.js de front-end para back-end
        x. criar rota para / api / produtos
        xi. devolver produtos
        xii. execute npm start
    10. Carregar produtos do back-end
        i. editar HomeScreen.js
        ii. definir produtos, carregamento e erro.
        iii. criar useEffect
        iv. definir async fetchData e chamá-lo
        v. instalar axios
        vi. obter dados de / api / produtos
        vii. mostre-os na lista
        viii. criar o componente de carregamento
        ix. criar componente de caixa de mensagem
        x. use-os na tela inicial
    11. Instale ESlint para Code Linting
        i. instalar extensão eslint VSCode
        ii. npm install -D eslint
        iii. execute ./node_modules/.bin/eslint --init
        iv. Create ./frontend/.env
        v. Adicionar SKIP_PREFLIGHT_CHECK = true
    12. Adicionar Redux à tela inicial
        i. npm install redux react-redux
        ii. Crie store.js
        iii. initState = {produtos: []}
        iv. redutor = (estado, ação) => alternar LOAD_PRODUCTS: {produtos: ação.payload}
        v. exportar createStore padrão (redutor, initState)
        vi. Editar HomeScreen.js
        vii. shopName = useSelector (state => state.products)
        viii. const dispatch = useDispatch ()
        ix. useEffect (() => despacho ({tipo: LOAD_PRODUCTS, carga útil: dados})
        x. Adicionar loja ao index.js
    13. Adicionar Redux à tela do produto
        i. criar constantes de detalhes do produto, ações e redutores
        ii. adicionar redutor a store.js
        iii. usar ação em ProductScreen.js
        iv. adicione / api / product /: id à API de back-end
    14. Manipular botão Adicionar ao carrinho
        i. Lidar com Adicionar ao carrinho em ProductScreen.js
        ii. criar CartScreen.js
    15. Implementar ação de adicionar ao carrinho
        i. criar constantes addToCart, ações e redutores
        ii. adicionar redutor a store.js
        iii. usar ação em CartScreen.js
        iv. renderizar cartItems.length
    16. Tela do carrinho de construção
        i. crie 2 colunas para itens do carrinho e ação do carrinho
        ii. cartItems.length === 0? carrinho esta vazio
        iii. mostrar imagem, nome, quantidade e preço do item
        iv. Prossiga para o botão Check-out
        v. Implementar ação remover do carrinho
    17. Implementar ação Remover itens do Carrinho
        i. criar constantes removeFromCart, ações e redutores
        ii. adicionar redutor a store.js
        iii. usar ação em CartScreen.js
    18. Criar usuários de amostra no MongoDB
        i. npm instalar mangusto
        ii. conectar ao mongodb
        iii. criar config.js
        iv. npm install dotenv
        v. exportar MONGODB_URL
        vi. criar modelos / userModel.js
        vii. criar userSchema e userModel
        viii. criar userRoute
        ix. Dados de amostra de sementes
    19. Crie produtos de amostra no MongoDB
        i. criar modelos / productModel.js
        ii. criar productSchema e productModel
        iii. criar productRoute
        iv. Dados de amostra de sementes
    20. Criar back-end de login
        i. criar / iniciar sessão API
        ii. verificar e-mail e senha
        iii. gerar token
        iv. instalar o token da web json
        v. instalar dotenv
        vi. token de retorno e dados
        vii. teste usando carteiro
    21. Projetar tela de login
        i. criar SigninScreen
        ii. renderizar campos de e-mail e senha
        iii. criar constantes de signin, ações e redutores
        iv. Atualizar cabeçalho com base no login do usuário
    22. Implementar ação de login
        i. criar constantes de signin, ações e redutores
        ii. adicionar redutor a store.js
        iii. usar ação em SigninScreen.js
    23. Criar tela de registro
        i. criar API para / api / users / register
        ii. inserir novo usuário no banco de dados
        iii. retornar informações do usuário e token
        iv. criar RegisterScreen
        v. Adicionar campos
        vi. Campos de estilo
        vii. Adicionar tela ao App.js
        viii. criar ação de registro e redutor
        ix. verificar a validação e criar usuário
    24. Criar tela de envio
        i. criar o componente CheckoutSteps.js
        ii. criar campos de envio
        iii. implementar constante de envio, ações e redutores
    25. Criar tela de pagamento
        i. criar campos de pagamento
        ii. implementar constante de envio, ações e redutores
    26. Projetar tela de pedido de colocação
        i. campos de resumo de pedido de design
        ii. ação de ordem de projeto
    27. API Create Place Order
        i. api createOrder
        ii. criar orderModel
        iii. criar orderRouter
        iv. criar rota de pedido de postagem
        v. criar verificação do token no (utils)
    28. Implementar ação PlaceOrder
        i. lidar com colocar pedido botão clique
        ii. criar constantes de ordem de colocação, ação e redutor
    29. Criar tela de pedido
        i. compilar api de pedido para / api / orders /: id
        ii. criar OrderScreen.js
        iii. despachar ação detalhes do pedido em useEffect
        iv. carregar dados com useSelector
        v. mostrar dados como tela de pedido de colocação
        vi. criar detalhes do pedido constante, ação e redutor
    30. Adicionar botão do PayPal
        i. obter id de cliente do paypal
        ii. configure-o no arquivo .env
        iii. criar formulário de rota / api / paypal / clientId
        iv. crie getPaypalClientID em api.js
        v. adicionar script de checkout paypal em OrderScreen.js
        vi. instalando o pacote react-paypal-button-v2
        vii. mostrar botão paypal
    31. Implementar pagamento de pedido
        i. atualizar pedido após o pagamento
        ii. crie payOrder em api.js
        iii. criar rota para /: id / pay em orderRouter.js
        iv. renderizar novamente após a ordem de pagamento
    32. Exibir histórico de pedidos
        i. criar API de pedidos de clientes
        ii. criar api para getMyOrders
        iii. mostrar pedidos na tela de perfil
        iv. ordens de estilo
    33. Exibir perfil de usuário
        i. criar api de detalhes do usuário
        ii. mostrar informações do usuário
    34. Atualizar perfil de usuário
        i. criar usuário atualização api
        ii. atualizar informações do usuário
    35. Criar visualização de administrador
        i. Criar Menu de Admin
        ii. Criar Middleware de Admin no Backend
        iii. Criar rota administrativa no frontend
    36. Lista de produtos
        i. Criar tela de lista de produtos
        ii. Adicionar redutor para armazenar
        iii. mostrar produtos na tela
    37. Criar Produto
        i. build criar produto api
        ii. construir botão Criar Produto
        iii. definir produto, criar constante, ação e redutor
        iv. usar ação na tela da lista de produtos
    38. Criar tela de edição de produto
        i. criar tela de edição
        ii. definir estado
        iii. criar campos
        iv. carregar detalhes do produto
        v. adicionar às rotas
    39. Produto de atualização
        i. definir API de atualização
        ii. definir constante de atualização do produto, ação e redutor
        iii. usar ação na tela de edição do produto
    40. Carregar imagem do produto
        i. npm instalar multer
        ii. definir roteador de upload
        iii. criar pasta de uploads
        iv. Handle frontend
    41. Excluir Produto
        i. criar api api no backend
        ii. criar constantes de exclusão, ação e redutor
        iii. use-o na tela da lista de produtos
    42. Listar pedidos
        i. criar lista de pedidos api
        ii. criar tela de lista de pedidos
        iii. Adicionar redutor para armazenar
        iv. mostrar produtos na tela
    43. Excluir pedido 2. criar ação de exclusão de pedido e redutor 3. adicionar ação de exclusão de pedido à lista de pedidos
    44. Entregar pedido
        i. criar constantes, ações e redutores para entrega de pedidos
        ii. adicionar ação de entrega de pedido à tela de detalhes do pedido
    45. Publicar no Heroku
        i. Criar repositório git
        ii. Crie uma conta heroku
        iii. instalar Heroku CLI
        iv. login do heroku
        v. aplicativos heroku: criar amazona
        vi. Edite o package.json para o script de construção
        vii. Criar Procfile
        viii. Criar banco de dados mongodb atlas
        ix. Definir a conexão do banco de dados nas variáveis ​​env do heroku
        x. Comprometa-se e empurre
    46. Listar usuários
        i. API de compilação para usuários da lista
        ii. Criar tela de lista de usuários
        iii. criar detalhes do pedido constante, ação e redutor
    47. Excluir usuários
        i. construir API para excluir usuários
        ii. criar detalhes do pedido constante, ação e redutor
        iii. Use a ação em UserListScreen
    48. Editar usuário
        i. API de construção para usuários atualizados
        ii. criar tela de edição de IU
    49. Implementar visão do vendedor
        i. adicionar menu de vendedor
        ii. criar rota de vendedor
        iii. liste produtos para vendedor
        iv. listar pedidos para vendedor
        v. adicionar vendedor à lista de produtos e tela de detalhes
    50. Criar página do vendedor
        i. criar página de vendedor
        ii. atualizar o componente do produto e a tela do produto
        iii. atualizar rotas de produtos
    51. Adicionar carrossel dos melhores vendedores
        i. instalar carrossel de reação
        ii. implementar ações e redutores para os principais vendedores
        iii. usar carrossel de reação com dados na tela inicial
    52. Forçar o pedido de itens de um vendedor
        i. atualize a ação addToCart para comprar de um vendedor em um pedido
    53. Criar caixa de pesquisa e tela de pesquisa
        i. criar barra de pesquisa em Header.js
        ii. adicionar estilo
        iii. lidar com formulário de envio
        iv. edite o url de análise para obter a string de consulta
        v. atualize a API da lista de produtos para pesquisa por nome
    54. Adicionar filtro de pesquisa avançada 1. filtrar por categoria 2. filtrar por faixa de preço 3. filtrar por classificação média
    55. Pesquisa avançada completa 1. filtrar por preço 2. filtrar por classificação 3. classificar por preço, classificação, ...
    56. Classifique e analise os produtos 1. classifique os produtos 2. crie ações e redutores
    57. Escolha o endereço no Google Map 1. crie credenciais do google map 2. atualize o arquivo .env com a Google Api Key 3. crie api para enviar google api ao frontend 4. crie a tela do mapa 5. fetch google api 6. getUserLocation 7. install @ react- google-maps / api 8. use-o na tela de envio 9. aplique o mapa na tela de checkout
    58. Correção de bug: execução local sem problemas
        i. adicionar informações do vendedor a data.js
        ii. dados do produto de sementes com informações de administrador como vendedor
        iii. corrigir isSeller e isAdmin na atualização do usuário
        iv. remover autenticação dos detalhes do usuário
    59. Implementar paginação
        i. adicionar paginação ao roteador do produto no backend
        ii. aplique o número da página a ações e redutores no frontend
        iii. mostrar os números das páginas na tela de pesquisa
    60. Recibo de pedido por e-mail por mailgun 1. criar conta mailgun 2. adicionar e verificar seu domínio para mailgun 3. instalar mailgun-js 4. definir a chave api no arquivo env 5. alterar ordem de pagamento em orderRouter 6. enviar e-mail o
    61. Criar tela de painel
        i. Crie dados de gráfico no back-end
        ii. Tela Construir Gráfico
    62. Implementar chat ao vivo com clientes
        i. use soquete io para criar back-end
        ii. criar componente de caixa de bate-papo
        iii. criar tela de suporte
