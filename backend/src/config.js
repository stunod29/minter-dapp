require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Nowhere Near!";
const description = "It's always somewhere near you, but nowhere near were you want it. 😉";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 192,
    layersOrder: [
      { name: "Background" },
      { name: "x" },
      { name: "melting" },
      { name: "behind the head" },
      { name: "white face" },
      { name: "top of head" },
      { name: "blackeye" },
      { name: "eyes" },
      { name: "mouth" },
      { name: "top of eyes" },
      { name: "hair" },
      { name: "white fuse" },
      { name: "face cover" },
      { name: "sayings" },
      { name: "overlay" },
    ],
  },
  {
    growEditionSizeTo: 384,
    layersOrder: [
      { name: "Background" },
      { name: "x" },
      { name: "melting" },
      { name: "behind the head" },
      { name: "baby blue face" },
      { name: "top of head" },
      { name: "blackeye" },
      { name: "eyes" },
      { name: "mouth" },
      { name: "top of eyes" },
      { name: "hair" },
      { name: "baby blue fuse" },
      { name: "face cover" },
      { name: "sayings" },
      { name: "overlay" },
    ],
  },
  {
    growEditionSizeTo: 576,
    layersOrder: [
      { name: "Background" },
      { name: "x" },
      { name: "melting" },
      { name: "behind the head" },
      { name: "blue face" },
      { name: "top of head" },
      { name: "blackeye" },
      { name: "eyes" },
      { name: "mouth" },
      { name: "top of eyes" },
      { name: "hair" },
      { name: "blue fuse" },
      { name: "face cover" },
      { name: "sayings" },
      { name: "overlay" },
    ],
  },
  {
    growEditionSizeTo: 768,
    layersOrder: [
      { name: "Background" },
      { name: "x" },
      { name: "melting" },
      { name: "behind the head" },
      { name: "bone face" },
      { name: "top of head" },
      { name: "blackeye" },
      { name: "eyes" },
      { name: "mouth" },
      { name: "top of eyes" },
      { name: "hair" },
      { name: "bone fuse" },
      { name: "face cover" },
      { name: "sayings" },
      { name: "overlay" },
    ],
  },
  {
    growEditionSizeTo: 960,
    layersOrder: [
      { name: "Background" },
      { name: "x" },
      { name: "melting" },
      { name: "behind the head" },
      { name: "green face" },
      { name: "top of head" },
      { name: "blackeye" },
      { name: "eyes" },
      { name: "mouth" },
      { name: "top of eyes" },
      { name: "hair" },
      { name: "green fuse" },
      { name: "face cover" },
      { name: "sayings" },
      { name: "overlay" },
    ],
  },
  {
    growEditionSizeTo: 1152,
    layersOrder: [
      { name: "Background" },
      { name: "x" },
      { name: "melting" },
      { name: "behind the head" },
      { name: "grey face" },
      { name: "top of head" },
      { name: "blackeye" },
      { name: "eyes" },
      { name: "mouth" },
      { name: "top of eyes" },
      { name: "hair" },
      { name: "grey fuse" },
      { name: "face cover" },
      { name: "sayings" },
      { name: "overlay" },
    ],
  },
  {
    growEditionSizeTo: 1344,
    layersOrder: [
      { name: "Background" },
      { name: "x" },
      { name: "melting" },
      { name: "behind the head" },
      { name: "light purple face" },
      { name: "top of head" },
      { name: "blackeye" },
      { name: "eyes" },
      { name: "mouth" },
      { name: "top of eyes" },
      { name: "hair" },
      { name: "light purple fuse" },
      { name: "face cover" },
      { name: "sayings" },
      { name: "overlay" },
    ],
  },
  {
    growEditionSizeTo: 1536,
    layersOrder: [
      { name: "Background" },
      { name: "x" },
      { name: "melting" },
      { name: "behind the head" },
      { name: "mint face" },
      { name: "top of head" },
      { name: "blackeye" },
      { name: "eyes" },
      { name: "mouth" },
      { name: "top of eyes" },
      { name: "hair" },
      { name: "mint fuse" },
      { name: "face cover" },
      { name: "sayings" },
      { name: "overlay" },
    ],
  },
  {
    growEditionSizeTo: 1728,
    layersOrder: [
      { name: "Background" },
      { name: "x" },
      { name: "melting" },
      { name: "behind the head" },
      { name: "pink face" },
      { name: "top of head" },
      { name: "blackeye" },
      { name: "eyes" },
      { name: "mouth" },
      { name: "top of eyes" },
      { name: "hair" },
      { name: "pink fuse" },
      { name: "face cover" },
      { name: "sayings" },
      { name: "overlay" },
    ],
  },
  {
    growEditionSizeTo: 1920,
    layersOrder: [
      { name: "Background" },
      { name: "x" },
      { name: "melting" },
      { name: "behind the head" },
      { name: "purple face" },
      { name: "top of head" },
      { name: "blackeye" },
      { name: "eyes" },
      { name: "mouth" },
      { name: "top of eyes" },
      { name: "hair" },
      { name: "purple fuse" },
      { name: "face cover" },
      { name: "sayings" },
      { name: "overlay" },
    ],
  },
  {
    growEditionSizeTo: 2112,
    layersOrder: [
      { name: "Background" },
      { name: "x" },
      { name: "melting" },
      { name: "behind the head" },
      { name: "red face" },
      { name: "top of head" },
      { name: "blackeye" },
      { name: "eyes" },
      { name: "mouth" },
      { name: "top of eyes" },
      { name: "hair" },
      { name: "red fuse" },
      { name: "face cover" },
      { name: "sayings" },
      { name: "overlay" },
    ],
  },
  {
    growEditionSizeTo: 2304,
    layersOrder: [
      { name: "Background" },
      { name: "x" },
      { name: "melting" },
      { name: "behind the head" },
      { name: "white face" },
      { name: "top of head" },
      { name: "blackeye" },
      { name: "eyes" },
      { name: "mouth" },
      { name: "top of eyes" },
      { name: "hair" },
      { name: "white fuse" },
      { name: "face cover" },
      { name: "sayings" },
      { name: "overlay" },
    ],
  },
  {
    growEditionSizeTo: 2496,
    layersOrder: [
      { name: "Background" },
      { name: "x" },
      { name: "melting" },
      { name: "behind the head" },
      { name: "yellow face" },
      { name: "top of head" },
      { name: "blackeye" },
      { name: "eyes" },
      { name: "mouth" },
      { name: "top of eyes" },
      { name: "hair" },
      { name: "yellow fuse" },
      { name: "face cover" },
      { name: "sayings" },
      { name: "overlay" },
    ],
  },
  //tongue

  {
    growEditionSizeTo: 2688,
    layersOrder: [
      { name: "Background" },
      { name: "x" },
      { name: "melting" },
      { name: "behind the head" },
      { name: "white face" },
      { name: "top of head" },
      { name: "blackeye" },
      { name: "eyes" },
      { name: "tongue" },
      { name: "top of eyes" },
      { name: "hair" },
      { name: "white fuse" },
      { name: "skull" },
      { name: "sayings" },
      { name: "overlay" },
    ],
  },
  {
    growEditionSizeTo: 2880,
    layersOrder: [
      { name: "Background" },
      { name: "x" },
      { name: "melting" },
      { name: "behind the head" },
      { name: "baby blue face" },
      { name: "top of head" },
      { name: "blackeye" },
      { name: "eyes" },
      { name: "tongue" },
      { name: "top of eyes" },
      { name: "hair" },
      { name: "baby blue fuse" },
      { name: "skull" },
      { name: "sayings" },
      { name: "overlay" },
    ],
  },
  {
    growEditionSizeTo: 3072,
    layersOrder: [
      { name: "Background" },
      { name: "x" },
      { name: "melting" },
      { name: "behind the head" },
      { name: "blue face" },
      { name: "top of head" },
      { name: "blackeye" },
      { name: "eyes" },
      { name: "tongue" },
      { name: "top of eyes" },
      { name: "hair" },
      { name: "blue fuse" },
      { name: "skull" },
      { name: "sayings" },
      { name: "overlay" },
    ],
  },
  {
    growEditionSizeTo: 3264,
    layersOrder: [
      { name: "Background" },
      { name: "x" },
      { name: "melting" },
      { name: "behind the head" },
      { name: "bone face" },
      { name: "top of head" },
      { name: "blackeye" },
      { name: "eyes" },
      { name: "tongue" },
      { name: "top of eyes" },
      { name: "hair" },
      { name: "bone fuse" },
      { name: "skull" },
      { name: "sayings" },
      { name: "overlay" },
    ],
  },
  {
    growEditionSizeTo: 3456,
    layersOrder: [
      { name: "Background" },
      { name: "x" },
      { name: "melting" },
      { name: "behind the head" },
      { name: "green face" },
      { name: "top of head" },
      { name: "blackeye" },
      { name: "eyes" },
      { name: "tongue" },
      { name: "top of eyes" },
      { name: "hair" },
      { name: "green fuse" },
      { name: "skull" },
      { name: "sayings" },
      { name: "overlay" },
    ],
  },
  {
    growEditionSizeTo: 3648,
    layersOrder: [
      { name: "Background" },
      { name: "x" },
      { name: "melting" },
      { name: "behind the head" },
      { name: "grey face" },
      { name: "top of head" },
      { name: "blackeye" },
      { name: "eyes" },
      { name: "tongue" },
      { name: "top of eyes" },
      { name: "hair" },
      { name: "grey fuse" },
      { name: "skull" },
      { name: "sayings" },
      { name: "overlay" },
    ],
  },
  {
    growEditionSizeTo: 3844,
    layersOrder: [
      { name: "Background" },
      { name: "x" },
      { name: "melting" },
      { name: "behind the head" },
      { name: "light purple face" },
      { name: "top of head" },
      { name: "blackeye" },
      { name: "eyes" },
      { name: "tongue" },
      { name: "top of eyes" },
      { name: "hair" },
      { name: "light purple fuse" },
      { name: "skull" },
      { name: "sayings" },
      { name: "overlay" },
    ],
  },
  {
    growEditionSizeTo: 4032,
    layersOrder: [
      { name: "Background" },
      { name: "x" },
      { name: "melting" },
      { name: "behind the head" },
      { name: "mint face" },
      { name: "top of head" },
      { name: "blackeye" },
      { name: "eyes" },
      { name: "tongue" },
      { name: "top of eyes" },
      { name: "hair" },
      { name: "mint fuse" },
      { name: "skull" },
      { name: "sayings" },
      { name: "overlay" },
    ],
  },
  {
    growEditionSizeTo: 4224,
    layersOrder: [
      { name: "Background" },
      { name: "x" },
      { name: "melting" },
      { name: "behind the head" },
      { name: "pink face" },
      { name: "top of head" },
      { name: "blackeye" },
      { name: "eyes" },
      { name: "tongue" },
      { name: "top of eyes" },
      { name: "hair" },
      { name: "pink fuse" },
      { name: "skull" },
      { name: "sayings" },
      { name: "overlay" },
    ],
  },
  {
    growEditionSizeTo: 4416,
    layersOrder: [
      { name: "Background" },
      { name: "x" },
      { name: "melting" },
      { name: "behind the head" },
      { name: "purple face" },
      { name: "top of head" },
      { name: "blackeye" },
      { name: "eyes" },
      { name: "tongue" },
      { name: "top of eyes" },
      { name: "hair" },
      { name: "purple fuse" },
      { name: "skull" },
      { name: "sayings" },
      { name: "overlay" },
    ],
  },
  {
    growEditionSizeTo: 4608,
    layersOrder: [
      { name: "Background" },
      { name: "x" },
      { name: "melting" },
      { name: "behind the head" },
      { name: "red face" },
      { name: "top of head" },
      { name: "blackeye" },
      { name: "eyes" },
      { name: "tongue" },
      { name: "top of eyes" },
      { name: "hair" },
      { name: "red fuse" },
      { name: "skull" },
      { name: "sayings" },
      { name: "overlay" },
    ],
  },
  {
    growEditionSizeTo: 4800,
    layersOrder: [
      { name: "Background" },
      { name: "x" },
      { name: "melting" },
      { name: "behind the head" },
      { name: "white face" },
      { name: "top of head" },
      { name: "blackeye" },
      { name: "eyes" },
      { name: "tongue" },
      { name: "top of eyes" },
      { name: "hair" },
      { name: "white fuse" },
      { name: "skull" },
      { name: "sayings" },
      { name: "overlay" },
    ],
  },
  {
    growEditionSizeTo: 4992,
    layersOrder: [
      { name: "Background" },
      { name: "x" },
      { name: "melting" },
      { name: "behind the head" },
      { name: "yellow face" },
      { name: "top of head" },
      { name: "blackeye" },
      { name: "eyes" },
      { name: "tongue" },
      { name: "top of eyes" },
      { name: "hair" },
      { name: "yellow fuse" },
      { name: "skull" },
      { name: "sayings" },
      { name: "overlay" },
    ],
  },

];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 1600,
  height: 1600,
  smoothing: false,
};

const extraMetadata = {
  external_url: "https://discord.gg/gEtKNScPjv", // Replace with your website or remove this line if you do not have one.
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 2; // Your API key rate limit
const CHAIN = 'polygon'; // only rinkeby or polygon

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'Nowhere Near!';
const CONTRACT_SYMBOL = 'NWN';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0x102E87C1a061F5736c3CbD5085127C35aFE01E77';
const TREASURY_ADDRESS = '0x102E87C1a061F5736c3CbD5085127C35aFE01E77';
const MAX_SUPPLY = 5000; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 0; // Minting price per NFT. Rinkeby = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 20; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-04-02T11:30:48+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = null; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 800; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0x102E87C1a061F5736c3CbD5085127C35aFE01E77"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = ["0x102E87C1a061F5736c3CbD5085127C35aFE01E77"]; // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
let CONTRACT_ADDRESS = "0x102E87C1a061F5736c3CbD5085127C35aFE01E77"; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = true; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = CONTRACT_NAME; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
const GENERIC_DESCRIPTION = "It's always somewhere near you, but nowhere near were you want it. 😉"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io/ipfs/bafybeid2nft4j3q3nhgfpatgy3envgm3r53ecvns7oxuywwjga2nnejxvq"; // Replace with your generic image that will display for all NFTs pre-reveal.

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK" && contractData.error === null) {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "NWN",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://discord.gg/gEtKNScPjv",
  creators: [
    {
      address: "0x102E87C1a061F5736c3CbD5085127C35aFE01E77",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "95%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES
};
