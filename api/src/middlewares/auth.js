
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')


/**
 * 
 * @param {* Request: é tudo que vamos requisitar do frontend} req 
 * @param {* Response: é tudo que vamos enviar pro frontend} res 
 * @param {* Next: é o que permite continuar e acessar o método do controller na rota após as verificações} next 
 */
module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization

    if(!authHeader) {
        return res.status(401).send({ erro: 'Token não foi informado' })
    }

    const parts = authHeader.split(' ')

    if(!parts.length === 2) {
        return res.status(401).send({ erro: 'Erro no token' })
    }

    const [ scheme, token ] = parts

    if(!/^Bearer$/i.test(scheme)) {
        return res.status(401).send({ erro: 'Token mal formado' })
    } 


    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err) return res.status(401).send({ erro: 'Token inválido' })

        req.userId = decoded.id
        return next()
    })
}