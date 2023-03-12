//import { web3auth } from "@/Web3AuthConfig";
import { Button } from "@chakra-ui/react";
import { Web3Auth } from "@web3auth/modal";
import { useEffect, useState } from "react";

function Index() {
  const [w, sw] = useState();
  async function clickHandle(e) {
    await w.connect().then((res) => {
      console.log(res);
    });
  }
  useEffect(() => {
    async function fun() {
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
      await web3auth.initModal();
      sw(web3auth);
    }
    fun();
  }, []);
  return (
    <div>
      <Button onClick={clickHandle}>Login Web3Auth</Button>
      <Button
        onClick={async () => {
          await w.getUserInfo().then((d) => console.log(d));
        }}
      >
        Login Web3Auth
      </Button>
    </div>
  );
}

export default Index;
