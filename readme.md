Iniciar o projeto node: npm init
Instalar o typescript: npm install -g typescript
Criar arquivo de configuração(typescript): tsc --init 
*caso não for(tsc -D --init ou npm i --save-dev typescript)

Deixar habilitado no tsconfig.json :
29 "rootDir": "./src",
30 "moduleResolution": "node",
52 "outDir": "./dist", 

Instalar a dependência(Biblioteca): npm install --save-dev @types/node

criar a pasta src fora e dentro o arquivo index.ts

Instalar nodemon (executar arquivos): npm install nodemon

Instalar tsnode: 
npm install -D ts-node
nodemon src/index.ts

No package.json (criar próprio script):
linha de cima ,
"start-dev":"nodemon src/index.ts"
Executar o script: npm run start-dev
