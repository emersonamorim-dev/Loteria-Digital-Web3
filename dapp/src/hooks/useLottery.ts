import React, { useMemo } from "react";
import { useWeb3React } from "@web3-react/core";
import { abi } from '../abi/Lottery.json';
import Web3 from "web3";
import { AbiItem } from "web3-utils";

export const useLottery = () => {

    const web3 = useWeb3React<Web3>();

    const contract = useMemo(() => {
        if (web3.account) {
           return new web3.library!.eth.Contract(abi as AbiItem[], '0x3FacD20758EdE769a47e10136EF43178201eD72F');
        }
   
        return null;
       }, [web3.library, web3.account]);

       return contract;
}