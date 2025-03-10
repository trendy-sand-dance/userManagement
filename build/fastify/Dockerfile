FROM node:20

WORKDIR /app

COPY package.json package-lock.json /app/

COPY tsconfig.json /app/tsconfig.json

RUN npm install \
	&& npm install better-sqlite3 \
	&& npm install @fastify/formbody \
	&& npm install fastify-favicon \
	&& npm install @fastify/flash \
	&& npm install @fastify/secure-session \
	&& npm install -D typescript ts-node @types/node nodemon

RUN npm install --save-dev @types/node

ENV NODE_ENV=production

COPY . /app/

EXPOSE 3000

CMD ["npm", "run", "start"]