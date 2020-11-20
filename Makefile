run up:
	@docker-compose up -d
	@yarn dev

down stop:
	@docker-compose down

restart:
	@docker-compose restart

app:
	@docker-compose exec app /bin/bash

redis:
	@docker-compose exec redis redis-cli

mongo:
	@docker-compose exec mongo mongo
