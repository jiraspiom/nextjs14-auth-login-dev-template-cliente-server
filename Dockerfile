FROM node:18-alpine
# Definindo o diretório de trabalho dentro do container
WORKDIR /app

# Copiando os arquivos do projeto para o diretório de trabalho
COPY . .

# Instalando as dependências do projeto
RUN npm install

# Construindo o projeto
RUN npm run build 

# Expondo a porta em que o servidor do Next.js irá executar (geralmente a porta 3000)
EXPOSE 3000

# Comando para iniciar o servidor do Next.js
CMD ["npm", "start"]