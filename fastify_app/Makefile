COMPOSE_FILE = ./docker-compose.yml
DB_FILE = ./fastify/database/database.db
#ENV_FILE = .env

all: build run

build:
	docker-compose build

run:
	docker-compose up -d

stop:
	docker-compose stop

status:
	docker-compose ps -a

logs:
	docker-compose logs

# will delete the whole database and it's contents
cleanDB:
	@if [ -f $(DB_FILE) ]; then \
		rm $(DB_FILE); \
	fi

clean:
	@docker stop $$(docker ps -qa) || true
	@docker rm $$(docker ps -qa) || true

re: clean all

.PHONY: all build run stop start again status logs cleanDB clean re