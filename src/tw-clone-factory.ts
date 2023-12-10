import { ProxyDeployed as ProxyDeployedEvent } from "../generated/TWCloneFactory/TWCloneFactory"
import { ProxyDeployed } from "../generated/schema"

export function handleProxyDeployed(event: ProxyDeployedEvent): void {
  let entity = new ProxyDeployed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.implementation = event.params.implementation
  entity.proxy = event.params.proxy
  entity.deployer = event.params.deployer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
