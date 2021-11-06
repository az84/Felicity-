const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
    authMiddleware: function ({ req }) {
        // token sent to 
        let token = req.body.token || req.query.token || req.headers.authorization;

        // seperate "bearer" from "<tokenvalue>"
        if (req.headers.authorization) {
            token = token
                .split(' ')
                .pop()
                .trim();
        }

        // return as is
        if (!token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token')
        }

        // return updated request object
        return req;
    },
    signToken: function ({ firstName, email, _id }) {
        const payload = { firstName, email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    }
};