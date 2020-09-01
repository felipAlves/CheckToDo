const User = require('../models/User')

const bcrypt = require('bcrypt')
const Token = require('../auth/token')

module.exports = {

    /**
     * Função para realizar o registro de novos usuários.
     * 
     * 1.0.0 - 29 de agosto - Felipe Alves <felip.garciaalves@gmail.com>
     * 
     * @param {* Request: O que nossa api vai requisitar do frontend} req 
     * @param {* Response> O que nossa api vai enviar para o frontend} res 
     * 
     */
    async register(req, res) {
        const { name, username, password } = req.body

        try {

            // Validações

            if(name.length > 50) {
                return res.send({ erro: 'Nome muito grande, tente novamente' })
            }

            if(username.length > 20) {
                return res.send({ erro: 'Username deve ter no máximo 20 caracteres.' })
            }

            const user = await User.findOne({ username })

            if(user) {
                return res.send({ erro: 'Esse usuário já existe, tente novamente' })
            }

            // Criação usuário

            const newUser = await User.create({
                name,
                username,
                password
            })
    
             return res.send({ 
                 newUser, 
                 sucesso: 'Usuário cadastrado com sucesso',
                 token: Token.generateToken({ id: newUser.id }),
            })
        } catch (error) {
            console.log(error)

            return res.send({ erro: 'Erro ao realizar o cadastro, tente novamente.' })
        }
    },




    /**
     * Função para realizar o login de um usuários.
     * 
     * 1.0.0 - 29 de agosto - Felipe Alves <felip.garciaalves@gmail.com>
     * 
     * @param {* Request: O que nossa api vai requisitar do frontend} req 
     * @param {* Response> O que nossa api vai enviar para o frontend} res 
     * 
     */

    async logon(req, res) {
        const { username, password } = req.body

        if(username.lenght > 20) {
            return res.send({ erro: 'Username deve ter no máximo 20 caracteres.' })
        }

        try {
            const user = await User.findOne({ username }).select('+password')

            if(!user) {
                return res.status(400).send({ erro: 'Usuário não encontrado' })
            }

            if(!await bcrypt.compare(password, user.password)) {
                return res.status(400).send({ erro: 'Senha inválida, tente novamente' })
            }

            res.send({
                username: user.username,
                id: user._id, 
                token: Token.generateToken({ id: user.id }), 
                sucesso: `Bem vindo, ${username}!`
            })
        } catch (error) {
            return res.status(400).send({ erro: 'Falha no Login' })
        }

        
    }

}