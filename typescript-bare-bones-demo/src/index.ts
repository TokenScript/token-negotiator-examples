
// @ts-nocheck

import { Client } from '@tokenscript/token-negotiator';
import config from './../../tokenConfig.json';
import {updateTokenConfig} from "../../environment";
import "@tokenscript/token-negotiator/dist/theme/style.css";

declare global {
    interface Window {
        negotiator?: any;
    }
}

let devonConfig = updateTokenConfig(config);

const issuers = [
    devonConfig,
    { collectionID: 'rinkeby-punk', onChain: true, contract: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656', chain: 'rinkeby', openSeaSlug: 'rinkeby-punk' },
    { collectionID: 'expansion-punk', onChain: true, contract: '0x0d0167a823c6619d430b1a96ad85b888bcf97c37', chain: 'eth' },
    { collectionID: 'women-tribe', onChain: true, contract: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656', chain: 'rinkeby', openSeaSlug: 'stl-rnd-women-tribe-nfts' },
    { collectionID: 'zed', onChain: true, contract: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656', chain: 'rinkeby', openSeaSlug: 'stl-rnd-zed' },
    { collectionID: 'stl-rnd-bayc-derivatives', onChain: true, contract: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656', chain: 'rinkeby', openSeaSlug: 'stl-rnd-bayc-derivatives' },
    { collectionID: 'stl-rnd-riot-racers', onChain: true, contract: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656', chain: 'rinkeby', openSeaSlug: 'stl-rnd-riot-racers' },
    { collectionID: 'poap', onChain: true, contract: '0x22C1f6050E56d2876009903609a2cC3fEf83B415', chain: 'xdai'},
    { collectionID: 'stl-test-nfts', onChain: true, contract: '0xafd1a2f17ce2a694d2ef649fe5ba51cc0282448a', chain: 'rinkeby'}
];

// ACTIVE
window.negotiator = new Client({
    type: 'active',
    issuers: [
        { collectionID: 'rinkeby-punk', onChain: true, contract: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656', chain: 'rinkeby', openSeaSlug: 'rinkeby-punk' },
        { collectionID: 'expansion-punk', onChain: true, contract: '0x0d0167a823c6619d430b1a96ad85b888bcf97c37', chain: 'eth' },
        { collectionID: 'women-tribe', onChain: true, contract: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656', chain: 'rinkeby', openSeaSlug: 'stl-rnd-women-tribe-nfts' }
    ],
    uiOptions: {
        //uiType: "inline",
        //containerElement: "#negotiator-inline",
        openingHeading: "Open a new world of discounts available with your tokens.",
        issuerHeading: "Get discount with Ticket",
        repeatAction: "try again",
        theme: "light",
        position: "bottom-right"
    },
    autoLoadTokens: 3,
    safeConnectOptions: {
        url: "https://safeconnect.tokenscript.org",
        initialProof: false
    }
});

var curTokens = [];

window.negotiator.on("tokens-selected", (tokens:any) => {

    let tokensCtn = document.getElementById("ticketList");

    let html = "";

    console.log(tokens);

    for (let issuer in tokens.selectedTokens){

        for (let i=0; i < tokens.selectedTokens[issuer].tokens.length; i++){

            let token = tokens.selectedTokens[issuer].tokens[i];

            html += `
                <div class="ticketContainer">
                  <div class="ticketDetails">
                    <h5 class="ticketClass">
                      ${token.ticketClass}
                    </h5>
                    <p class="ticketId">
                      ${token.ticketId}
                    </p class="ticketId">
                    <p class="devconId">
                      Devcon ID: ${token.devconId}
                    </p>
                    <button class="authButton" onclick="authenticateToken(this);" data-issuer="${issuer}" data-index="${i}">Authenticate</button>
                  </div>
                  <img alt="ticket-logo" class="ticketImg" src="ticket_example_image.svg"/>
                </div>
            `;
        }
    }

    tokensCtn.innerHTML = html;

    curTokens = tokens.selectedTokens;

});

window.negotiator.on("token-proof", (data:any) => {
    console.log(data);
});

window.negotiator.negotiate();

window.authenticateToken = (elem) => {

    let issuer = elem.dataset.issuer;
    let index = elem.dataset.index;

    // authenticate ownership of token
    window.negotiator.authenticate({
        issuer: issuer,
        unsignedToken: curTokens[issuer].tokens[index]
    });
};

window.updateIssuers = () => {
    // choose 3 random issuers to show
    let newIssuers = [];

    while (newIssuers.length < 3){
        let issuer = issuers[Math.floor(Math.random()*issuers.length)]; //NOSONAR Ignore math.random warning as this isn't used for crypto functions

        if (newIssuers.indexOf(issuer) === -1)
            newIssuers.push(issuer)
    }

    window.negotiator.negotiate(newIssuers, true);
};

// PASSIVE

// const negotiator = new Client({
//     type: 'passive',
//     issuers: [
//         'devcon',
//         { contract: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656', chain: 'rinkeby', openSeaSlug: 'rinkeby-punk' },
//         { contract: '0x0d0167a823c6619d430b1a96ad85b888bcf97c37', chain: 'eth' }
//     ],
//     options: {}
// });

// negotiator.on('tokens', (issuerTokens) => {

//     // use tokens
//     console.log(issuerTokens);

// });

// negotiator.on("token-proof", (tokenProof) => {

//     // use proof

// });

// // invoke

// negotiator.negotiate();
