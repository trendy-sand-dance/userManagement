COMPOSE_FILE = ./docker-compose.yml
DB_FILE = ./fastify/src/database/database.db
#ENV_FILE = .env

all: build run

build:
	docker-compose build --no-cache

run:
	docker-compose up -d

stop:
	docker-compose stop

status:
	docker-compose ps -a

logs:
	docker-compose logs -f

# will delete the whole database and it's contents
cleanDB:
	@if [ -f $(DB_FILE) ]; then \
		rm $(DB_FILE); \
	fi

clean:
	@docker-compose down --volumes
	@docker stop $$(docker ps -qa) || true
	@docker rm $$(docker ps -qa) || true

re: clean all

.PHONY: all build run stop status logs cleanDB clean re