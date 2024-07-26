<h1>CONNECT ONG</h1>
Hackathon CTJ - FIAP<br>
Integrantes: Diego Teixeira de Araujo; Felipe Bolivar São Clemente; Miguel Luiz Capristano; Rodrigo Souza Sampaio; Walter Cardoso da Silveira Neto.<br>
<br>

<h2>DESCRIÇÃO:</h2>
O Connect ONG é um aplicativo web destinado a aproximar voluntários e ONGS, facilitando a candidatura de pessoas interessadas a instituições sem fins lucrativos.<br>
<br>
O projeto foi desenvolvido através da plataforma low-code Appsmith, que permite a criação de interfaces responsivas e fáceis de manusear a partir de widgets pré-construidos.<br>
<br>
Por sua vez, o banco de dados está hospedado no Supabase, garantido que o trafego de dados da aplicação seja seguro e veloz.<br>
<br>

<h2>INICIALIZAÇÃO:</h2>
O projeto pode ser acessado através do seguinte link: https://app.appsmith.com/app/hacka-ctj/login-66a150c589fdf50135df575e?branch=main/<br>
<br>

<h2>PÁGINA INICIAL E CADASTRO:</h2>
A página inicial do Connect ONG contém o formulário para que o usuário faça seu login com email e senha. Caso não tenha ainda conta na plataforma, o cadastro pode ser realizado através do botão "Cadastrar uma nova conta". Neste formulário, o usuário deverá informar seu nome completo, e-mail, e senha pessoal. O formulário valida se a senha digitada preenche os requisitos mínimos.<br>
<br>
Neste formulário, o usuário também pode optar por criar a sua conta com privilégios de administrador ("admin"), clicando no checkbox apropriado.<br>
Assim que o cadastro for realizado com sucesso, a plaraforma irá encaminhar um email de confirmação para o endereço do usuário. Para completar o registro, é necessário clicar no link que consta no email, e efetuar o primeiro login.<br>
<br>
Ainda, na página de login do ONG Connect, existe a possibilidade de resgatar a sua conta caso tenha esquecido a sua senha. O usuário deve clicar no botão "Esqueci minha senha" e informar o email de cadastro. A plataforma enviará um link de uso único para efetuar o login.
ATENÇÃO: O Supabase limita o envio de emails de confirmação e resgate a 3 emails por hora. Se houver erro no cadastro da sua conta, por favor aguarde uns momentos e tente novamente.<br>
<br>

<h2>PÁGINA PRINCIPAL:</h2>
Após o login, o usuário será redirecionado ao Dashboard do aplicativo. No topo, constam os botões de "Cadastrar uma nova ONG", "Perfil do Usuário / Área do Admin", e "Efetuar Logout".<br>
<br>
Fique atento pois apenas Admins podem cadastrar novas ONGs. É feita uma validação quando o usuário clica no botão de cadastro. Caso a plataforma confirme que o usuário tem a permissão necessária, será aberto um formulário com os campos para nome, área de atuação, descrição, localização, contatos, e link para uma imagem do logo da ONG que será cadastrada. Apenas o campo de nome é obrigatório.<br>
<br>
O botão de log out encerra a sessão e redireciona o usuário para a tela de login.<br>
Em seguida, o dashboard exibe uma tabela com todas as ONGs atualmente cadastradas na plataforma. No topo da tabela consta um campo de pesquisa para filtrar os registros.<br>
<br>
Ao final da página, consta um formulário para que o usuário possa se candidatar a uma das ONGs cadastradas. O usuário deve selecionar uma das instituições da lista drop-down e elaborar um texto breve de apresentação, informando a sua motivação para a candidatura. Esse texto será posteriormente enviado à ONG para avaliação.<br>
<br>


<h2>PERFIL DO USUÁRIO / ÁREA DO ADMIN:</h2>
Tanto os usuários comuns quanto os admins têm acesso a seu perfil pelo mesmo botão do Dashboard, porém é feita uma validação que verifica o nível de acesso da conta, garantindo que apenas os admins tenham acesso às funcionalidades restritas.<br>
Ambos os tipos de perfil tem acesso a um formulário para editar o seu nome completo e email cadastrados na plataforma. Da mesma forma, ambos podem redifinir a sua própria senha, preenchendo o formulário adequado.<br>
Na área de perfis não-admin, consta ao final da página uma tabela com o nome de todas as ONGs que o usuário se candidatou.<br>
Já na área de pessoas admin, há uma tabela com os dados dos demais usuários cadastrados. Os admins tem privilégios para alterar o nome de outros usuários, bem como para lhes conceder ou revogar poderes de admin. Em cada linha da tabela, devem ser feitas as alterações necessárias, e após, na última coluna, deve ser clicado no botão de Salvar Alterações para efetivamente alterar os registros.<br>
<br>
