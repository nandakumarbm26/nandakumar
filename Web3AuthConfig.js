import { Web3Auth } from "@web3auth/modal";

// const openloginAdapter = new OpenloginAdapter({
//   adapterSettings: {
//     network: "cyan", // Optional - Provide only if you haven't provided it in the Web3Auth Instantiation Code
//     uxMode: "popup",
//     whiteLabel: {
//       name: "Nanda Kumar",
//       logoLight: "https://web3auth.io/images/w3a-L-Favicon-1.svg",
//       logoDark: "https://web3auth.io/images/w3a-D-Favicon-1.svg",
//       defaultLanguage: "en",
//       dark: true, // whether to enable dark mode. defaultValue: false
//     },
//   },
// });
const web3auth = new Web3Auth({
  clientId:
    "BO5GjNuwqnC6CegH_DwhsnUUo03jPLIHDNCfOxBIoLNE_vVFNnJRtW9BULBkAUDXRgDG0UVeq596qNs32KWRLeM", // Get your Client ID from Web3Auth Dashboard
  web3AuthNetwork: "cyan",
  chainConfig: {
    chainNamespace: "eip155",
    chainId: "0x1",
    rpcTarget: "https://rpc.ankr.com/eth", // This is the mainnet RPC we have added, please pass on your own endpoint while creating an app
  },
  uiConfig: {
    theme: "dark",
    loginMethodsOrder: ["facebook", "google"],
    appLogo: "https://web3auth.io/images/w3a-L-Favicon-1.svg", // Your App Logo Here
  },
  defaultLanguage: "en",
  modalZIndex: "99998",
});
// web3auth.configureAdapter(openloginAdapter);

export { web3auth };
