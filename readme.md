Sample Web3 App
---------------
Based on tutorial: https://www.youtube.com/watch?v=Wn_Kb3MR_cU&list=PL-CIe5EX79TroFG2r36Mev-nT9EAlhUH-&index=9

Styles used: https://gist.github.com/adrianhajdin/5f6cc61fa04de7b8fa250eb295db62fd

1. ReactJS App using Vite ( https://vitejs.dev/guide/ )
    1. npm create vite@latest
    2. project name: ./
    3. framework: React
    4. variant: Javascript
    5. npm install
    6. npm run dev
2. For all styles, we use Tailwind it is a utility css framework ( https://tailwindcss.com/docs/guides/vite )
    1. Start from second step where, as react is already installed in step 1.
    2. npm install -D tailwindcss postcss autoprefixer
    3. npx tailwindcss init -p
    4. Copied tailwind.config.js from the website.
    5. Copied and Replaced src/index.css with index.css content provided in the website.
    6. Copied and Replaced return value of App.jsx from the content provided in the website.
3. Copy index.css content
4. Copy images from the link.
5. install & import react-icons & ethers
    1. npm install react-icons ethers
6. 
7. in ./smart_contract run 'npm init -y'
8. updated the welcome & loader components
9. Run `npm install --save-dev hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers` in ./smart_contract folder to install required packages.
10. Ropsten is not working so used Sepolia Testnet. 
    Some good tips like using dotenv to store wallet details: 'https://docs.alchemy.com/docs/how-to-deploy-a-smart-contract-to-the-sepolia-testnet'

