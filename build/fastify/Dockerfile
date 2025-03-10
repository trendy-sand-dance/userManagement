FROM node:latest

WORKDIR /app

COPY conf/package.json conf/package-lock.json ./

RUN npm install -g npm@11.2.0 \
	&& npm install fastify \
	&& npm install -D typescript @types/node nodemon ts-node
	
RUN export NODE_ENV=production

EXPOSE 3000

CMD ["npm", "run", "dev"]