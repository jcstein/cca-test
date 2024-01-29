export default {
    "$schema": "../../chain.schema.json",
    "chain_name": "gmrollup",
    "chain_id": "gm",
    "pretty_name": "TESTING",
    "status": "testnet",
    "network_type": "testnet",
    "bech32_prefix": "gm",
    "daemon_name": "gmd",
    "node_home": "$HOME/.gm",
    "key_algos": [
      "secp256k1"
    ],
    "slip44": 118,
    "fees": {
      "fee_tokens": [
        {
          "denom": "ustake",
          "fixed_min_gas_price": 0
        }
      ]
    },
    "apis": {
      "rpc": [
        {
          "address": "http://localhost:26657",
          "provider": "local-network"
        }
      ],
      "rest": [
        {
          "address": "http://localhost:1317",
          "provider": "local-network"
        }
      ]
    },
    "beta": true,
  }