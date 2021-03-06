
const RpcApiName = {
    get_block: "chain_get_block",
    get_state_root_hash: "chain_get_state_root_hash",
    get_block_transfers: "chain_get_block_transfers",
    get_deploy: "info_get_deploy",
    get_balance: "state_get_balance",
    get_auction_info: "state_get_auction_info",
    get_era_info_by_switch_block: "chain_get_era_info_by_switch_block",
    get_status: "info_get_status",
}

const ELEMENT_TYPE = {
    PUBLIC_KEY_HEX: "PUBLIC_KEY_HEX", //account address
    PUBLIC_KEY_HASH: "PUBLIC_KEY_HASH",
    BLOCK_HEIGHT: "BLOCK_HEIGHT",
    BLOCK_HASH: "BLOCK_HASH",
    DEPLOY_HEX: "DEPLOY_HEX",
    TRANSFER_HEX: "TRANSFER_HEX",
    VALIDATOR: "VALIDATOR",
    UNKNOWN: "UNKNOWN",
}

module.exports = {RpcApiName, ELEMENT_TYPE}
