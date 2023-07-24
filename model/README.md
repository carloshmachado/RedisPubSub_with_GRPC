# model-nfse

Microsserviço responsável pela comunicação da aplicação com o banco de dados, centralizando as operações a serem realizadas no BD.

## 🚥 Status

- Em desenvolvimento

## 🚀 Como executar

Com o **Node.js** instalado (de preferência na versão 18x), execute os passos abaixo:

```bash
# Clone este repositório
$ git clone git@git.tecnospeed.local:tecnospeed/facilitador/nfse-nacional/servi-os-compartilhados/model-nfse.git

# Acesse a pasta do projeto no terminal/cmd
$ cd model-nfse

# Instale as dependências e crie um arquivo .env com base no .env.example
$ npm install

# Baixe o arquivo abaixo e coloque na raiz do projeto
# <http://git.tecnospeed.local/tecnospeed/facilitador/nfse-nacional/protobuf/protobuf/-/blob/develop/model-nfse/model-nfse.proto>

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:50051 - acesse <0.0.0.0:50053>
```

- Para rodar os testes, execute o comando `npm run test`
- Para rodar os lint, execute o comando `npm run lint`

## 📌 Exemplos

### NFS-e

#### Requisição de consulta

```json
{
  "id": "647a0ae0a08f643c216f2fea",
  "authorization": "token-da-aplicacao"
}
```

### Retorno de consulta de sucesso

```json

```
