class Encrypted_clan {
    constructor(){
        this.name="The viosam giants"
        this.tutor="zimor.near"
    }
    shout() {
        console.log(this.name)
        console.log(this.tutor)
    }
}
const network = new Encrypted_clan()
network.shout()