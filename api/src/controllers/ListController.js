const List = require('../models/List')

module.exports = {
    /**
     * Função para realizar o registro de novas listas.
     * 
     * 1.0.0 - 29 de agosto - Felipe Alves <felip.garciaalves@gmail.com>
     * 
     * @param {* Request: O que nossa api vai requisitar do frontend} req 
     * @param {* Response> O que nossa api vai enviar para o frontend} res 
     * 
     */
    async create(req, res) {
        const { date } = req.body
        const { user_id } = req.headers

        if(date.length > 10) {
            return res.send({ message: 'Data inválida tente novamente' })
        }

        try {
            const list = await List.create({ date, user_id })

            res.send({ 
                list,
                message: 'Lista criada com sucesso' })
        } catch (error) {
            res.status(400).send({ message: 'Erro ao criar Lista, tente novamente' })
        }
    },


    /**
     * Função para realizar a busca de todas listas de determinado usuário.
     * 
     * 1.0.0 - 29 de agosto - Felipe Alves <felip.garciaalves@gmail.com>
     * 
     * @param {* Request: O que nossa api vai requisitar do frontend} req 
     * @param {* Response> O que nossa api vai enviar para o frontend} res 
     * 
     */
    async index(req, res) {
        const { user_id } = req.headers
        const { page = 1 } = req.query

        try {
            const count = await List.find({ user_id }).countDocuments()

            const lists = await List.find({ user_id })
                .limit(5)
                .skip((page - 1) * 5)
                .sort({
                    title: 'asc'
                })


            if(!lists) {
                return res.send({ massage: 'O usuário n tem nenhuma lista cadastrada' })
            }

            res.header('X-Total-Count', count)

            return res.json(lists)
        } catch (error) {
            res.status(400).send({ erro: 'Erro ao buscar listas' })
        }
    },


    /**
     * Função para deletar alguma lista de determinado usuário.
     * 
     * 1.0.0 - 29 de agosto - Felipe Alves <felip.garciaalves@gmail.com>
     * 
     * @param {* Request: O que nossa api vai requisitar do frontend} req 
     * @param {* Response> O que nossa api vai enviar para o frontend} res 
     * 
     */

    async delete(req, res) {
        const { id } = req.params
        const { user_id } = req.headers

        const list = await List.findById(id)

        if(!list) {
            return res.status(400).send({ error: 'Lista não encontrada' })
        }

        if(!user_id === list.user_id) {
            return res.status(401).json({ error: 'Você não tem permissão para executar essa função.' })
        }

        try {
            await List.findByIdAndDelete(id)

            res.send({ massage: 'Lista deletada com sucesso' })
        } catch (error) {
            
        }
    }
}
