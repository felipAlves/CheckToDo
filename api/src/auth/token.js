const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')

module.exports = {
    /**
     * Função para gerar um novo token
     * 
     * @param {Id do usuário para gerar um token} params 
     * 
     */
    generateToken(params = {}) {
        return jwt.sign(params, authConfig.secret, {
            expiresIn: 86400
        })
    }
}