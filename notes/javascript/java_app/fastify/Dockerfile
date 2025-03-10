FROM node:latest

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install && npm install -g nodemon \
	&& npm install better-sqlite3 \
	&& npm install @fastify/formbody \
	&& npm install fastify-favicon \
	&& npm install @fastify/flash \
	&& npm install @fastify/secure-session

RUN export NODE_ENV=production

EXPOSE 3000

CMD ["npm", "start", "dev"]