const { ApolloServer } = require('apollo-server');
const mongoose  = require('mongoose');

const MONGODB = process.env.MONGODB

const typeDefs = require('./Graphql/typeDefs');
const resolvers = require('./Graphql/resolvers');

const server = new ApolloServer({
	typeDefs , 
	resolvers
});

mongoose.connect(MONGODB , {useNewUrlParser : true})
	.then(()=>{
		console.log('MongoDB Connection Successfull');
		return server.listen({port: 3030})
    .then((res)=>{
        console.log(`Server running at ${res.url}`)
    })
})