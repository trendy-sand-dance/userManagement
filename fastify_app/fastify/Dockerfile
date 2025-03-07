FROM node:latest

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install -g npm@11.2.0 \
	&& npm install \
	&& npm install -D typescript @types/node \
	&& npm install fastify


	#&& npm install -D typescript @types/node nodemon \
	#&& npm install fastify ts-node --save \
	#&& npm install better-sqlite3 \
	#&& npm install @fastify/formbody \
	#&& npm install astify-favicon \
	#&& npm install -D @types/fastify-favicon \
	#&& npm install @fastify/flash \
	#&& npm install @fastify/secure-session

RUN export NODE_ENV=production

EXPOSE 3000

CMD ["node", "--no-experimental-type-stripping", "server.ts"]

#CMD ["npm", "run", "dev"]
