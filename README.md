# Perfex n8n Bridge — don’t lose CRM events overnight

[![CI](https://github.com/marchikx/perfex-n8n-bridge/actions/workflows/ci.yml/badge.svg)](https://github.com/marchikx/perfex-n8n-bridge/actions/workflows/ci.yml)

**For agencies** that run [Perfex CRM](https://www.perfexcrm.com/) as source of truth and [n8n](https://n8n.io/) for automations.  
**Pain:** n8n down → events vanish. This module signs webhooks, queues retries, and ships an n8n blueprint with HMAC verify.

**Buy the packaged zip:** [Gumroad](https://soluradev.gumroad.com/l/perfex-n8n-bridge)  
**Verify without Perfex:** `make verify`

Not an n8n community node that pulls Perfex API — this installs **inside Perfex** and pushes out.

```bash
make verify
```

Hire / paid test: https://github.com/marchikx/marchikx/issues/new?template=hire.md

MIT (module source). Packaged distribution on Gumroad.
