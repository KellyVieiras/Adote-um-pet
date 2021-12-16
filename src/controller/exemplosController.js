const AdoteUmPet = require("../models/exemplosSchema")

const getAll = async (req, res) => {
    try {
        const pets = await AdoteUmPet.find()
        res.status(200).json({
            message: "lista de pets cadastrados: ",
            pets
        })
    }
        catch (error) {
            res.status(500).json({message: error.message})
        }
        

        
            }
            const criarCadastro = async (req, res) => {
                try {
                    const cadastrarPets = await AdoteUmPet.create(req.body);
                    if(atualizarAdoteUmPet){
                        atualizarAdoteUmPet.nome = req.body.nome ||atualizarAdoteUmPet.nome
                        
                        atualizarAdoteUmPet.cidade = req.body.cidade 
                        
                        atualizarAdoteUmPet.animal = req.body.animal || atualizarAdoteUmPet.animal

                        const salvardoteUmPet = await atualizarAdoteUmPet.save();
                        res.status(200).jason({
                            message: "Dados da adoteumpet,atualizados com sucesso.",
                            salvarAdoteUmPet
                        });
                    }

                    res.status(201).json({
                        message: "Cadastro realizado com sucesso",
                        cadastrarPets
                    })
                } catch (error) {
                    res.status(500).json({message: error.message})
                }
            }
            

module.exports = {
    getAll,
    criarCadastro
}