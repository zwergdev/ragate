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
				themeMode='dark'
				themeVariables={{
					'--w3m-font-family': 'Poppins, sans-serif',
					'--w3m-text-big-bold-font-family': 'Poppins, sans-serif',
					'--w3m-text-medium-regular-font-family': 'Poppins, sans-serif',
					'--w3m-text-small-regular-font-family': 'Poppins, sans-serif',
					'--w3m-text-small-thin-font-family': 'Poppins, sans-serif',
					'--w3m-text-xsmall-bold-font-family': 'Poppins, sans-serif',
					'--w3m-text-xsmall-regular-font-family': 'Poppins, sans-serif',
					'--w3m-accent-color': 'rgba(100, 156, 222, .91)',
					'--w3m-overlay-background-color': 'rgba(0, 0, 0, 0.7)',
					'--w3m-overlay-backdrop-filter': 'blur(5px)',
					'--w3m-background-color': '#151515'
				}}
			/>
		</>
	)
}
