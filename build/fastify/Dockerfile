FROM node:20

WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

COPY tsconfig.json /app/tsconfig.json

RUN npm install --prefix /app \
	&& npm install -D typescript  \
	&& npm install -g tsx \
	&& npm install fastify \
	&& npm install @types/node \
	&& npm install @fastify/static \
	&& npm install @fastify/formbody \
	&& npm install view \
	&& npm install fastify-favicon \
	&& npm install ejs \
	&& npm install better-sqlite3
	
ENV NODE_ENV=production

COPY . /app/

EXPOSE 3000

CMD ["npm", "run", "start"]