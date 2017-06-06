import {
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID,
  GraphQLSchema,
} from 'graphql';
import db from './db';

const articleType = new GraphQLObjectType({
  name: 'Article',
  description: 'This represents a Article',
  fields: () => ({
    author: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
    excerpt: {
      type: GraphQLString,
    },
    id: {
      type: GraphQLString,
    },
    published: {
      type: GraphQLBoolean,
    },
    tags: {
      type: new GraphQLList(GraphQLString),
    },
    title: {
      type: GraphQLString,
    },
  }),
});

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query',
  fields: () => ({
    articles: {
      type: new GraphQLList(articleType),
      resolve() {
        return db.Article.find();
      },
    },
    article: {
      type: articleType,
      args: { id: { type: GraphQLID } },
      resolve: (_, { id }) => {
        return db.Article.findById(id);
      },
    },
  }),
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'This is a root mutation',
  fields: () => ({
    DeleteArticle: {
      type: articleType,
      args: { id: { type: GraphQLID } },
      resolve: (_, { id }) => {
        return db.Article.findOneAndRemove({ _id: id });
      },
    },
    AddArticle: {
      type: articleType,
      args: {
        author: {
          name: 'author',
          type: GraphQLString,
        },
        title: {
          name: 'title',
          type: GraphQLString,
        },
        content: {
          name: 'content',
          type: GraphQLString,
        },
        excerpt: {
          name: 'excerpt',
          type: GraphQLString,
        },
        published: {
          name: 'published',
          type: GraphQLBoolean,
        },
        tags: {
          name: 'tags',
          type: GraphQLString,
        },

      },
      resolve: (_, { author, title, content, excerpt, published, tags }) => {
        const arrayTags = tags === '' ? [] : tags.split(',');
        const finalObject = new db.Article({ id, author, title, content, excerpt, published, tags: arrayTags  });
        return new Promise((resolve) => {
          finalObject.save((err, res) => {
            resolve(res);
          });
        });
      },
    },
  }),
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});

export default Schema;
