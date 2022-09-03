import { v4 as uuidv4 } from 'uuid';
import Savages from '../images/SavagesTotsys.jpg';
import Akina from '../images/Akina.jpg';
import Urban from '../images/Urban.jpg';
import Meta from '../images/MetaNurse.jpg';
import Digi from '../images/Digipunks.jpg';
import Behance from '../images/Behance.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'SavagesTotsys',
    desc: 'The Totsys project is a collection of 1270 NFTs. I was the owner of the project so i created and developed the website, the minting Dapp & builded the community',
    img: Savages,
    link: 'https://www.savagestotsys.com',
  },
  {
    id: uuidv4(),
    name: 'Minting Dapp on Solana',
    desc: 'Minting Dapp web 3.0 on Solana blockchain, you can connect your phantom wallet & mint some NFT (be carefull its live & it cost SOL to mint).',
    img: Meta,
    link: 'https://metanurses-mintpage.netlify.app/',
  },
  {
    id: uuidv4(),
    name: 'Akina Heroes',
    desc: 'NFT project on Solana blockchain, i created the website and the minting page.',
    img: Akina,
    link: 'https://akina-landingpage.netlify.app/',
  },
  {
    id: uuidv4(),
    name: 'Urban Legends',
    desc: 'Landing page of an NFT project named Urban Legends',
    img: Urban,
    link: 'https://incomparable-eclair-c0b167.netlify.app/',
  },

  {
    id: uuidv4(),
    name: 'DigiPunks',
    desc: 'A perosnal website with some custom fonts & tricks on CSS.',
    img: Digi,
    link: 'https://digitalpunksnft.xyz/',
  },
  {
    id: uuidv4(),
    name: 'Behance Portfolio',
    desc: 'There is some old project created from scratch on my latest agency, with bootstrap css js.',
    img: Behance,
    link: 'https://www.behance.net/adambenmessaoud',
  },
];

export default projects;
