export const ARTICLES_QUERY = `{
  articles {
    id
    author
    title
    content
    excerpt
    published
    tags
  }
}`;


export const ARTICLE_DELETE_QUERY = id => {
  const query = `mutation {
      DeleteArticle(id: "${id}") {
        id
        author
        title
        content
        excerpt
        published
        tags
      }
  }`;
  return query;
};


export const ARTICLE_ADD_QUERY = (author, title, content, excerpt, published, tags ) => {
  const query = `mutation {
      AddArticle(
        author:    "${author}",
        title:     "${title}"
        content:   "${content}",
        excerpt:   "${excerpt}",
        published:  ${published},
        tags:      "${tags}",
      ){
        author
        title
        content
        excerpt
        published
        tags
      }
  }`;
  return query;
};
