import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { ProxyDeployed } from "../generated/TWCloneFactory/TWCloneFactory"

export function createProxyDeployedEvent(
  implementation: Address,
  proxy: Address,
  deployer: Address
): ProxyDeployed {
  let proxyDeployedEvent = changetype<ProxyDeployed>(newMockEvent())

  proxyDeployedEvent.parameters = new Array()

  proxyDeployedEvent.parameters.push(
    new ethereum.EventParam(
      "implementation",
      ethereum.Value.fromAddress(implementation)
    )
  )
  proxyDeployedEvent.parameters.push(
    new ethereum.EventParam("proxy", ethereum.Value.fromAddress(proxy))
  )
  proxyDeployedEvent.parameters.push(
    new ethereum.EventParam("deployer", ethereum.Value.fromAddress(deployer))
  )

  return proxyDeployedEvent
}
