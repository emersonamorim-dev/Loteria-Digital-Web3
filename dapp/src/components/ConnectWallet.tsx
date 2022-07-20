import { useWeb3React } from "@web3-react/core";
import React from "react";
import { injected } from "../utils/connectors";

const ConnectWallet: React.FC = () => {
    const web3 = useWeb3React()

    return <button className="btn btn-primary dapp-btn"
    onClick={() => !web3.account ? web3.activate(injected) : null}>{!web3.account ? 'Conectar Carteira' : web3.account}</button>;
}

export default ConnectWallet;