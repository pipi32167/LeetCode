

go: 
	cd go/ && \
	go test .

rust:
	cd rust/ && \
	cargo test

kotlin:
	cd kotlin/ && \
	./gradlew test

ruby:
	cd ruby/ && \
	ruby -I . test/*_test.rb

.PHONY: go rust kotlin ruby