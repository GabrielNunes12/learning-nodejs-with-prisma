# App

Gym Pass like

# RFs (Requisitos Funcionais)

- [ ] Deve ser possível se cadastrar;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível obter perfil de usuário logado;
- [ ] Deve ser possível obter numero de check-ins realizados pelo usuário logado;
- [ ] Deve ser possível usuário cancelar check-in;
- [ ] Deve ser possível cadastrar uma academia;
- [ ] Deve ser possível válidar o check-in do usuário;
- [ ] Deve ser possível filtrar por academias (range, por nome)
- [ ] Deve ser possível o usuário visualizar histórico de check-ins (╯°□°）╯︵ ┻━┻

# RNs (Requisitos não funcionais)

- [ ] O usuário não pode registrar com o mesmo email;
- [ ] O usuário só pode fazer check-in uma única vez por dia;
- [ ] O usuário só pode fazer check-in em academia bem próxima a ele (no máximo 100m);
- [ ] O check-in só poderá ser válidado após 20 min após criação;
- [ ] O check-in só pode ser válidado por administradores;
- [ ] A academia só pode ser criada por um administrador;

# RT (Requisito tecnico)

- [ ] Senha do usuário deverá ser criptografada;
- [ ] Sistema de Autorização / Autenticação deve conter JWT (JSON web token);
- [ ] Sistema de páginação, deve conter 20 itens por página;
- [ ] Os dados deve ser persistido usando o banco relacional PostegreSQL;
