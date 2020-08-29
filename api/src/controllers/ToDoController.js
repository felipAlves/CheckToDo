const ToDo = require('../models/ToDo')

module.exports = {

    /**
     * Função para criar um novo ToDo.
     * 
     * 1.0.0 - 29 de agosto - Felipe Alves <felip.garciaalves@gmail.com>
     * 
     * @param {* Request: O que nossa api vai requisitar do frontend} req 
     * @param {* Response> O que nossa api vai enviar para o frontend} res 
     * 
     */
    async create(req, res) {
        const { 
            title,
            description,
            priority
        } = req.body

        const { list_id } = req.headers

        try {
            const todo = await ToDo.create({ 
                title, 
                description, 
                priority, 
                list_id 
            })

            return res.send({ todo, message: 'Tarefa criada com sucesso!' })
        } catch (error) {
            return res.status(400).send({ message: 'Erro ao criar nova tarefa, verifique os dados e tente novamente' })
        }
    },

    /**
     * Função para listar todos os ToDos de uma determinada lista.
     * 
     * 1.0.0 - 29 de agosto - Felipe Alves <felip.garciaalves@gmail.com>
     * 
     * @param {* Request: O que nossa api vai requisitar do frontend} req 
     * @param {* Response> O que nossa api vai enviar para o frontend} res 
     * 
     */
    async index(req, res) {
        const { list_id } = req.headers

        try {
            const todos = await ToDo.find({ list_id }).populate('list_id')

            if(!todos) {
                return res.send({ message: 'Não foi encontrado nenhuma tarefa' })
            }

            return res.json(todos)
        } catch (error) {
            return res.status(400).send({ message: 'Erro ao buscar taréfas' })
        }
    }


}