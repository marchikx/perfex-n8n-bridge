.PHONY: verify test php-test node-test lint-php

verify: php-test node-test lint-php

php-test:
	php -n tests/sender-hmac.test.php

node-test:
	node tests/verify-node.test.js

lint-php:
	php -n -l n8n_bridge/libraries/N8n_sender.php
	php -n -l tests/sender-hmac.test.php
