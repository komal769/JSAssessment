// create a variable to hold your NFTs
let nfts = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, address, phone, marks) {
    const nft = {
        name: name,
        address: address,
        phone: phone,
        marks: marks
    };
    nfts.push(nft);
}

// create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < nfts.length; i++) {
        console.log("Name: " + nfts[i].name);
        console.log("Address: " + nfts[i].address);
        console.log("Phone: " + nfts[i].phone);
        console.log("Marks: " + nfts[i].marks);
        console.log("-------------");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nfts.length;
}

// call your functions below this line

// Mint some NFTs
mintNFT('Komal', 'Haryana', '781361278', '98');
mintNFT('Nishant', 'Haryana', '37982374', '97');
mintNFT('Bhavesh', 'UK', '293729347', '96');

// List all NFTs
listNFTs();

// Print the total supply of NFTs
console.log("Total NFTs: " + getTotalSupply());
