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
                    const criarDocerias = await Docerias.create(req.body);
                    res.status(201).json({
                        message: "Cadastro realizado com sucesso",
                        criarDocerias
                    })
                } catch (error) {
                    res.status(500).json({message: error.message});
                }
            
}

const atualizarCadastro = async (req, res) => {
                        try {
                            const atualizarPet = await AdoteUmPet.findById(req.params.id);
                    
                            if(atualizarPet) {
                                atualizarPet.nome = req.body.nome || atualizarPet.nome
                                atualizarPet.cidade = req.body.cidade || atualizarPet.cidade 
                                
                                atualizarPet.animal = req.body.animal || atualizarPet.animal
                    
                                const salvarPet = await atualizarPet.save();
            res.status(200).json({
                message: "Dados do Pet, atualizados com sucesso.",
                salvarPet
            });
        }

        res.status(400).json({message: "Me desculpe, animal não encontrado!"});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deletarCadastro = async (req, res) => {
    try {
        const adoteUmPet = await AdoteUmPet.findById(req.params);
        if(!adoteUmPet) {
            res.status(404).json({message: "animal não encontrado."})
        }
        await adoteUmPet.delete();
        res.status(204).json({message: "Animal deletado com sucesso."})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const buscarId = async (req, res) => {
    try {
        const { id } = req.params;
        const buscaradoteUmPet = await AdoteUmPet.findById(id);

        if(!buscaradoteUmPet) {
            res.status(404).json({message: "adoteUmPet não encontrado."})
        }
        res.status(200).json({
            message: "animal encontrado:",
            buscaradoteUmPet
        })
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
                    
            

module.exports = {
    getAll,
    criarCadastro,
    atualizarCadastro,
    deletarCadastro,
    buscarId
}