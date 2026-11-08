.PHONY: verify test php-test node-test lint-php

verify: php-test node-test lint-php

php-test:
	php -n tests/sender-hmac.test.php

node-test:
	node tests/verify-node.test.js
	node tests/version-consistency.test.js

lint-php:
	find n8n_bridge tests -name '*.php' -print0 | xargs -0 -n1 php -n -l
