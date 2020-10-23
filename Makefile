# Gerenciador NF-e
DOCKER=docker-compose
DOCKER_EXEC=$(DOCKER) exec app

all: up install

up:
	$(DOCKER) up -d --remove-orphans --force-recreate

build:
	$(DOCKER) up -d --remove-orphans --force-recreate --build

down:
	$(DOCKER) down

ps:
	$(DOCKER) ps

install:
	$(DOCKER_EXEC) yarn install

start:
	$(DOCKER_EXEC) yarn start

bash:
	$(DOCKER_EXEC) ash
