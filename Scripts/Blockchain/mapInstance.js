import web3 from './web3.js'; 
import MapArray from '../Blockchain/MapArray.js'; 

const instance = new web3.eth.Contract(MapArray.abi, '0x170474B4BD695BDE6934b154A3224022E481C190'); 
export default instance; 