import { fetchUserData, fetchUserMaterials } from "./fetch_data.js";

window.userAddress = null;

const env = "testnet";

window.onload = async () => {
  try {
    if (env === "testnet") {
      await ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x7B" }],
      });
    } else if (env === "ganache") {
      await ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x539" }],
      });
    }
  } catch (switchError) {
    if (switchError.code === 4902) {
      if (env === "testnet") {
        await ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: "0x7B",
              chainName: "Fuse Sparknet",
              nativeCurrency: {
                name: "SPARK",
                symbol: "SPARK",
                decimals: "18",
              },
              rpcUrls: ["https://rpc.fusespark.io/"],
              blockExplorerUrls: ["https://explorer.fusespark.io/"],
            },
          ],
        });
      }
    }
  }
  dispatchLoadGameEngine();
  await connectToMetamask();
  window.userAddress = window.ethereum.selectedAddress;
  await fetchUserData();
  await fetchUserMaterials();
  dispatchUnlockedEvent();
};

const ethereumButton = document.getElementById("eth-button");
ethereumButton.addEventListener("click", async () => {
  await connectToMetamask();
  ethereumButton.textContent = "Log out";
  window.userAddress = window.ethereum.selectedAddress;
  await fetchUserData();
  dispatchUnlockedEvent();
});

async function connectToMetamask() {
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  window.userAddress = accounts[0];
}

function dispatchLoadGameEngine() {
  var loadGameEngine = new CustomEvent("loadGameEngine");
  window.dispatchEvent(loadGameEngine);
}

function dispatchUnlockedEvent() {
  var onUnlocked = new CustomEvent("onUnlocked");
  window.dispatchEvent(onUnlocked);
}
