const fetch = require('node-fetch');

const resolvers = {
    Query: {
        categories: () => {
            return fetch('https://api.chucknorris.io/jokes/categories')
                .then(res => res.json());
        },
        joke: (parent, args, context, info) => {
            return fetch(`https://api.chucknorris.io/jokes/random?category=${args.category}`)
                .then(res => res.json());
        }
    }
};

module.exports = resolvers;