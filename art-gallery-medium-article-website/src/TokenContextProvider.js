import React, { createContext, useState, useEffect } from 'react';
import { Client } from '@tokenscript/token-negotiator';
import "@tokenscript/token-negotiator/dist/theme/style.css";

const TokenContext = createContext({ 
  tokens: []
});

let negotiator;

const TokenContextProvider = (props) => {

  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    
    negotiator.on("tokens-selected", (tokens) => { 
    
      setTimeout(() => {
      
        let selectedTokensState = [];

        const { selectedTokens } = tokens;

        if(selectedTokens["demo-tokens"].tokens) {

          selectedTokensState.push(...selectedTokens["demo-tokens"].tokens);

        }

        setTokens(selectedTokensState);

      }, 0);

    });
      
  }, []);

  return (

    <TokenNegotiatorInstance render={({ negotiator }) => (

      <TokenContext.Provider props={negotiator} value={{ tokens, negotiator }}>

        {props.children}

      </TokenContext.Provider>

    )} />

  )
}
class TokenNegotiatorInstance extends React.Component {
  
  constructor(props) {
    
    super(props);

    if(negotiator) return;

    negotiator = new Client({
      type: 'active',
      issuers: [
        { collectionID: 'demo-tokens', onChain: true, contract: '0x0d0167a823c6619d430b1a96ad85b888bcf97c37', chain: 'eth' }
      ],
      options: {
        overlay: {
          openingHeading: "Open a new world of discounts available with your tokens.",
          issuerHeading: "Discount with your tokens",
          repeatAction: "try again",
          theme: "light",
          position: "bottom-right"
        }
      },
      filter: {}
    });

    setTimeout(() => { negotiator.negotiate(); }, 0);
    
  }
  render() {
    return this.props.render({ negotiator: negotiator })
  };
}

export { TokenContext, TokenContextProvider }