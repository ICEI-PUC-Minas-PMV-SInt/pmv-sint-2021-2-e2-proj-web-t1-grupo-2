# Especificações do Projeto

Devido à preocupação com o meio ambiente e, principalmente, ao constante aumento dos gastos que um veículo a combustão gera para os usuários, o uso e a procura por veículos elétricos vem aumentando gradativamente. Portanto, cresce também a necessidade de auxiliar os consumidores durante o processo de escolha do produto, garantindo uma maior confiabilidade em seu investimento.

Durante a especificação desse projeto serão definidos: as personas, as histórias de usuários, os requisitos funcionais e não funcionais e as suas restrições.

Para a criação das personas foi considerado o perfil do público-alvo (definido na documentação de contexto). Já as histórias de usuários são definidas a partir dos requisitos funcionais, exemplificando o que cada stakeholder (administrador, usuário) pode realizar no sistema e o motivo para o qual cada funcionalidade existe.

## Personas


As personas levantadas durante o processo de entendimento do problema são apresentadas a seguir:

<table>
 <tr>
  <th>Foto</th>
  <th>Nome</th>
  <th>Descrição</th>
  <th>Motivações</th>
  <th>Frustrações</th>
  <th>Hobbies, Histórias</th>
 </tr>
 <tr>
  <td><img width="600px" height="auto" src="https://github.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2021-1-e1-proj-web-t1-sint_2021_01_e1_grupo_02/blob/main/docs/img/persona01.jpg"></td>
  <td>Carlos</td>
  <td>
    <ul>
       <li>35 Anos.</li>
       <li>Médico clínico geral de São Carlos - SP.</li>
    </ul>
  </td>
  <td>
   <ul>
       <li>Ajudar pessoas.</li>
       <li>Fazer a diferença no mundo.</li>
    </ul>
  </td>
  <td>
   <ul>
       <li>Desigualdade social.</li>
       <li>Poluição.</li>
    </ul>
  </td>
  <td>
   É solteiro, adora viajar hospedando-se pelo aplicativo airbnb e apaixonado por tecnologias, sempre que possível está escutando podcast no Spotify. Recentemente automatizou   toda sua casa a deixando "inteligente", sempre que possível está buscando inovações.</td>
 </tr>
 <tr>
  <td><img width="600px" height="auto" src="https://github.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2021-1-e1-proj-web-t1-sint_2021_01_e1_grupo_02/blob/main/docs/img/persona.jpg"></td>
  <td>Gabi</td>
  <td>
   <ul>
    <li>40 Anos.</li>
    <li>Professora universitária na UFOP, Ouro Preto - MG.</li>
   </ul>
  </td>
  <td>
  <ul>
    <li>Inovações.</li>
    <li>Transformar o mundo.</li>
   </ul>
  </td>
  <td>
  <ul>
    <li>Desigualdade digital.</li>
   </ul>
  </td>
  <td>É casada, entusiasta por tecnologia. Em suas aulas de IA (inteligência artificial) sempre busca inspirar seus alunos com conteúdos inovadores. Sempre antenada em novidades, vive com o aplicativo do LinkedIn aberto lendo artigo ali publicados e fazendo networking. Recentemente ajudou a montar o novo laboratório de IA na universidade.</td>
 </tr>
 <tr>
  <td><img width="600px" height="auto" src="https://github.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2021-1-e1-proj-web-t1-sint_2021_01_e1_grupo_02/blob/main/docs/img/persona03.jpg"></td>
  <td>Pedro Paulo</td>
  <td> 
    <ul>
       <li>45 Anos.</li>
      <li>Arquiteto renomado em Belo Horizonte - MG.</li>
   </ul>
  </td>
  <td>
   <ul>
       <li>Sustentabilidade.</li>
      <li>Torna o mundo melhor.</li>
   </ul>
  </td>
  <td>
  <ul>
      <li>Desmatamento.</li>
      <li>Queimada.</li>
     <li>Poluição.</li>
   </ul>
  </td>
  <td>É casado e sua esposa está esperando o primeiro filho do casal. Sempre busca criar seus projetos de forma sustentável, deixa claro sua preocupação com o meio ambiente. Recentemente comprou uma casa em um condomínio fechado muito conhecido na região por sua reserva ambiental.
Utiliza muito os aplicativos Strava e Relieve para registrar suas aventuras em trilhas.</td>
 </tr>
</table>

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`             |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------            |----------------------------------------|
|Administrador       | Realizar cadastro de usuario                    | Para que eu possa compartilhar o gerenciamento da aplicação|
|Administrador       | Registrar logon do sistema                    | Para que eu possa gerenciar a aplicação|
|Administrador       | Registrar logoff do sistema                    | Garantir a integridade da conta de administrador|
|Administrador       | Cadastrar veículos                   | Melhorar a usuabilidade do usuário, possibilitando a seleção de veículo|
|Usuário do sistema  | Calcular a autonomia do veículo elétrico       | Analisar o desempenho e o custo de energia|
|Usuário do sistema  | Compartilhar e imprimir o resultado do cálculo | Ter informações impressas e detalhadas |
|Usuário do sistema  | Encontrar pontos de eletropostos | Conhecer pontos de recarga |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|-----|-----------------------------------------|----|
|RF-001| Cada campo do formulário deve ser validado quanto ao tipo de dado (inteiro/real/caractere) | ALTA |
|RF-002| Permitir que o usuário escolha o modelo do veículo (elétricos e a combustão) entre as opções cadastradas | ALTA |
|RF-003| Ao final do cálculo, oferecer opção para o usuário compartilhar o resultado nas redes sociais | BAIXA |
|RF-004| Permitir que o administrador efetue Logoff no sistema | ALTA |
|RF-005| Permitir que o administrador realize o cadastro de veículos (elétricos e a combustão) | ALTA |
|RF-006| Permitir que o administrador realize o cadastro de usuários | ALTA |
|RF-007| Permitir que o administrador efetue Logon no sistema | ALTA |
|RF-008| Realizar os cálculos necessários para comparação da autonomia e custo beneficio entre carros elétricos x combustão | ALTA |
|RF-009| Permitir recuperação de login| BAIXA |
|RF-010| Restrição de extensão do arquivo do upload de imagens| MÉDIA |
|RF-011| Restrição de tamanho de arquivo do upload de imagens | MÉDIA |
|RF-012| Criar 3 alternativas de cálculo para escolha do usuario | ALTA |
|RF-013| Criar o modal para exibição das alternativas de cálculo | ALTA |
|RF-014| Realizar cálculo com informações personalizadas | ALTA |	
|RF-015| Realizar cálculo com informações dos veículos cadastrados | ALTA |
|RF-016| Realizar cálculo com informações do meu veículo vs carro elétrico | ALTA |
|RF-017| Cada campo de formulário que possa gerar dúvida deve possuir um icone de ajuda | ALTA |
|RF-018| Permitir que o usuário encontre eletropostos disponíveis no Brasil | ALTA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para executar em dispositivos móveis | ALTA |
|RNF-002| As permissões de acesso ao sistema podem ser alteradas apenas pelo administrador de sistemas | MÉDIA |
|RNF-003| Utilizar o SCRUM como metodologia de desenvolvimento | ALTA | 
|RNF-004| Interface Intuitiva e Reativa | Alta | 
|RNF-005| O sistema deve funcionar em todos os principais navegadores (Chrome, mozila e Edge) |  MÉDIA | 
|RNF-006| Deve processar requisições do usuário em no máximo 5s |  BAIXA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| O projeto deverá utilizar Arquitetura Reativa   |
