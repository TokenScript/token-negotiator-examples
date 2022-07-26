import React, { createContext, useState, useEffect } from 'react';
import { Client } from '@tokenscript/token-negotiator';
import config from '../../tokenConfig.json';
import {updateTokenConfig} from '../../environment';

const TokenContext = createContext({ 
  tokens: []
});

const tokenKeys = [
  'devcon'
];

window.negotiator = null;

const TokenContextProvider = (props) => {

  const [tokens, setTokens] = useState([]);

  const [proof, setProof] = useState();
  
  useEffect(() => {
    
    window.negotiator.on("tokens-selected", (tokens) => { 
    
      let selectedTokensState = [];

      const { selectedTokens } = tokens;

      tokenKeys.map((token) => {

        selectedTokensState.push(...tokens.selectedTokens[token].tokens);
        
      });

      console.log('selected tokens', selectedTokens);

      setTokens(selectedTokensState);

    });

    window.negotiator.on("token-proof", (result) => {

      console.log('token proof', result.data);
          
      setProof(result.data);

    });
    
  }, []);

  return (

    <TokenNegotiatorInstance render={({ negotiator }) => (

      <TokenContext.Provider props={negotiator} value={{ tokens, proof, negotiator }}>

        {props.children}

      </TokenContext.Provider>

    )} />

  )
}
class TokenNegotiatorInstance extends React.Component {
  
  constructor(props) {
    
    super(props);

    let devconConfig = config;

    devconConfig.collectionID = "devcon";

    devconConfig = updateTokenConfig(devconConfig);

    window.negotiator = new Client({
      type: 'active',
      issuers: [
        devconConfig
      ],
      uiOptions: {
        openingHeading: "Open a new world of discounts available with your tokens.",
        issuerHeading: "Get discount with Ticket",
        repeatAction: "try again",
        theme: "light",
        position: "bottom-right"
      }
    });

    window.negotiator.negotiate();
    
  }
  render() {
    return this.props.render({ negotiator: window.negotiator })
  };
}

export { TokenContext, TokenContextProvider }
