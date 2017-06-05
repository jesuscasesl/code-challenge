export const ARTICLES_QUERY = `{
  articles {
    author
    excerpt
    id
    title
    content
    published
    tags
  }
}`;


export const ARTICLE_DELETE_QUERY = id => {
  const query = `mutation {
      DeleteArticle(id: "${id}") {
        id
        author
        excerpt
        title
        content
        published
        tags
      }
  }`;
  return query;
};
