App = {
    load: async () => {
        await App.bootloader()
        await App.loadContract()
    },

    bootloader: async () => {
            if (window.ethereum) {
                try {
                    // Requisita o acesso à conta
                    const ethereumButton = document.querySelector('#conectar-metamask');

                    ethereumButton.addEventListener('click', () => {
                        ethereum.request({ method: 'eth_requestAccounts' })
                        .then((retorno) => {
                            if(retorno["code"] != 4001){
                                metamask_modal.style.display = 'none';
                                $("#endereco").html('Conectado ao endereço: ' + ethereum.selectedAddress);
                            }
                        })

                    });
                } catch (error) {
                    console.log(error)
                }
            }

            // Se o browser não tiver Metamask
            else {
                console.log('MetaMask faltando');
            }
    },

    contracts: {},

    loadContract: async () => {
        // Comunicação com o contrato inteligente usando JavaScript

        // Recupera o contrato inteligente da pasta build que está no formato JSON
        const dataBase = await $.getJSON('DataBase.json')
        
        // TruffleContract é usado para chamar as funções do contrato inteligente
        App.contracts.DataBase = TruffleContract(dataBase)
        App.contracts.DataBase.setProvider(ethereum)

        // Resgatando os valores da blockchain
        App.dataBase = await App.contracts.DataBase.deployed()
    },

    //Injeta os dados no contrato inteligente
    injectData: async (tableName, tableSize, attrNames, records) => {
        await App.dataBase.createTable(tableName, tableSize, attrNames, records, {from: ethereum.selectedAddress})
    },

    showData: async () => {
        const show = await App.dataBase.retrieveRecord("Estudantes", 0, {from: ethereum.selectedAddress});
        console.log(show)
        console.log("...")
    }
}

// Injeta o Jquery necessário para conectar com o MetaMask
$(window).on('load', function(){
        App.load()

        metamask_modal = document.getElementById("metamask-modal");

        if(ethereum.selectedAddress == null){
            metamask_modal.style.display = 'none';
        }
        else{
            metamask_modal.style.display = 'none';
            $("#endereco").html('Conectado ao endereço: ' + ethereum.selectedAddress);
        }
})
