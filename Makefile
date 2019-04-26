.PHONY: help

help:
	echo run dev server with "make dev"

.PHONY: dev

dev:
	cd browser/ && yarn start
