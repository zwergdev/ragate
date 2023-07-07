'use client'
import {createConfig, configureChains, mainnet, WagmiConfig} from 'wagmi'
import {EthereumClient, w3mConnectors, w3mProvider} from '@web3modal/ethereum'
import {Web3Modal} from '@web3modal/react'

const projectId = '712204029b36af41c52bdd378d9fdba8'
const chains = [mainnet]
const {publicClient} = configureChains(chains, [w3mProvider({projectId})])

const config = createConfig({
	autoConnect: true,
	connectors: w3mConnectors({projectId, chains}),
	publicClient
})
const ethereumClient = new EthereumClient(config, chains)

export const Providers = ({children}: {children: React.ReactNode}) => {
	return (
		<>
			<WagmiConfig config={config}>{children}</WagmiConfig>
			<Web3Modal
				projectId={projectId}
				ethereumClient={ethereumClient}
				themeVariables={{
					'--w3m-font-family': 'Poppins, sans-serif'
				}}
			/>
		</>
	)
}
