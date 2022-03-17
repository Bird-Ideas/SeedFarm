import { web3, builder, receiver, item } from "./web3.js";
import { DATA_PROVIDER } from "../Engine/game.js";

const priceDict = ["0", "0.1"];

listenForEvents();

function listenForEvents() {
  window.addEventListener("sendBuildingPlaced", buildingPlaced);
  window.addEventListener("sendSpecialPlaced", specialPlaced);
  window.addEventListener("sendBuildingDestroyed", buildingDestroyed);
  window.addEventListener("sendCollectYield", collectYield);
}

async function buildingPlaced(e) {
  const _pos = e.detail.tile;
  const _sId = e.detail.building;
  try {
    const result = await builder.methods.placeStructure(_pos, _sId).send({
      from: window.userAddress,
      value: web3.utils.toWei(priceDict[_sId]),
      gas: "200000",
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }

  console.log("building", _pos);
}

async function specialPlaced(e) {
  const materials = DATA_PROVIDER.GetMaterialCount();
  const _pos = e.detail.tile;

  const ids = [];
  const amounts = [];
  var total = 0;
  for (var i = 0; i < 5; ++i) {
    const current = Number.parseInt(materials[i]);
    if (current > 0) {
      if (current < 3) {
        if (total + current >= 3) {
          ids.push(i);
          amounts.push(3 - total);
          break;
        } else {
          ids.push(i);
          amounts.push(Number.parseInt(current));
        }
        total += current;
      } else {
        ids.push(i);
        amounts.push(3 - total);
        break;
      }
    }
  }
  if (ids.length == 0) return;
  try {
    const materials = [];
    console.log(ids, amounts);
    const transfer = await item.methods
      .safeBatchTransferFrom(
        window.userAddress,
        "0x305b5c3481B2bC997364a69e93c3eF9cF0b2c419",
        ids,
        amounts,
        "0x00"
      )
      .send({
        from: window.userAddress,
        gas: "200000",
      });
    console.log(transfer);
    const collect = await receiver.methods
      .collectSpecial(window.userAddress, _pos)
      .send({
        from: window.userAddress,
        gas: "200000",
      });
    console.log(collect);
  } catch (error) {
    console.log(error);
  }
}

async function buildingDestroyed(e) {
  const _pos = e.detail.tile;
  try {
    const result = await builder.methods.removeStructure(_pos).send({
      from: window.userAddress,
      gas: "200000",
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
  console.log("destroying", _pos);
}

async function collectYield(e) {
  const _pos = e.detail.tile;
  const _sId = e.detail.building;
  try {
    const result = await builder.methods.withdrawTileYield(_pos, _sId).send({
      from: window.userAddress,
      gas: "200000",
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }

  console.log("collecting yield", _pos);
}
