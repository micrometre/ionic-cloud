.PHONY: run
dev:
	ionic serve
start:
	ionic capacitor run android  --external -l 
build:
	ionic cap copy	
	ionic cap sync
studio: 
	ionic cap open android


