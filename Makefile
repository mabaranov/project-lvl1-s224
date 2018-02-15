install:
	npm install

start:
	npm run babel-node -- src/bin/brain-games.js
	npm run babel-node -- src/bin/brain-even.js
	npm run babel-node -- src/bin/brain-calc.js

lint:
	npm run eslint .

publish:
	npm publish
