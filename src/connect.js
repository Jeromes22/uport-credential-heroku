import { Connect, SimpleSigner } from 'uport-connect'
import { Credentials } from 'uport-credentials'

// export let uport = new Connect('HashRebels\'s new app', {
//     clientId: '2ooxSzSVcCDFkoSqvvbDWHcvWopwQ9WqcE1',
//     network: 'rinkeby',
//     signer: SimpleSigner('ae6e5d3ddb6fe602eaab88b182a35b8076d52b078a6c4b9b0f45e9b11f56a102')
// })
export let uport = new Connect('HashRebels\'s new app', {
    clientId: '2orZ8SPR2jApEMaX6H5BzYFXx5kyBi6TQXA',
    isMobile: false,
    network: 'rinkeby',
    signer: SimpleSigner('73fb2900f051fcf38d5369514ad9a904da77d5bb5a3a05e5ffaff2ea7f6c4a31')
})

export let credentials = new Credentials({
    appName: 'HashRebels',
    did: 'did:uport:0x256375caa601a459858b1eb3d7b2eb4fc40e66c1',
    privateKey: process.env.PRIVATE_KEY
})

uport.requestCredentials({
        requested: ['name', 'avatar', 'email', 'phone', 'country'],
        notifications: true
    })
    .then((credentials) => {
        console.log(credentials)
    })

credentials.createRequest({
    requested: ['name', 'avatar', 'email', 'phone', 'country'],
    callbackUrl: 'https://ourserver.test/receive/' + randomToken,
    notifications: true
}).then(requestToken => {

})