FROM node:20

WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

COPY tsconfig.json /app/tsconfig.json

RUN npm install --prefix /app \
	&& npm install -D typescript  \
	&& npm install -g tsx \
	&& npm install fastify \
	&& npm install @types/node
	#&& npm install @types/better-sqlite3 \
	#&& npm install better-sqlite3 \
	#&& npm install view \
	#&& npm install fastify-favicon \
	#&& npm install @fastify/formbody \
	#&& npm install ejs
	
ENV NODE_ENV=production

COPY . /app/

EXPOSE 3000

CMD ["npm", "run", "start"]