FROM node:20

WORKDIR /app

COPY conf/package.json /app/package.json
COPY conf/package-lock.json /app/package-lock.json

COPY conf/tsconfig.json /app/tsconfig.json

#RUN npm install -g npm@11.2.0

RUN npm install --prefix /app \
	&& npm install -D typescript @types/node \
	&& npm install -g tsx \
	&& npm install fastify \
	&& npm install @types/better-sqlite3 --save-dev \
	&& npm install @types/fastify-static --save-dev \
	&& npm install @types/ejs --save-dev \
	&& npm install @fastify/formbody --save-dev
	
ENV NODE_ENV=production

COPY . /app/

EXPOSE 3000

CMD ["npm", "run", "dev"]