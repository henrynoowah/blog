export const getPosts = async (
  searchParams: GetPostsPayload
): Promise<any[]> => {
  const { cursor, tag, search, limit } = searchParams;
  const isSearch = !!search || !!tag;
  const username = process.env.NEXT_PUBLIC_VELOG_ID;
  const payload = !isSearch
    ? {
        operationName: 'Posts',
        variables: {
          username,
          limit,
          cursor,
          tag: tag ?? null,
        },
        query: `query Posts($cursor: ID, $username: String, $limit: Int, $tag: String) {
          posts(cursor: $cursor, username: $username, limit: $limit, tag: $tag) {
            id
            title
            short_description
            thumbnail
            user {
              id
              username
              profile {
                id
                thumbnail
              }
            }
            url_slug
            released_at
            updated_at
            comments_count
            tags
            is_private
            likes
          }
        }`,
      }
    : {
        operationName: 'SearchPosts',
        variables: {
          keyword: search ?? tag,
          username,
        },
        query: `query SearchPosts($keyword: String!, $offset: Int, $username: String) {
            searchPosts(keyword: $keyword, offset: $offset, username: $username) {
              count
              posts {
                id
                title
                short_description
                thumbnail
                user {
                  id
                  username
                  profile {
                    id
                    thumbnail
                  }
                }
                url_slug
                released_at
                tags
                is_private
                comments_count
              }
            }
          }`,
      };

  try {
    const response = await fetch('https://v2cdn.velog.io/graphql', {
      // cache: 'no-cache',
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => res.json());

    return !isSearch ? response.data.posts : response.data.searchPosts.posts;
  } catch (e) {
    return [];
  }
};

export const getPost = async (slug: string): Promise<any> => {
  let post = null;

  const payload = {
    operationName: 'ReadPost',
    variables: {
      username: process.env.NEXT_PUBLIC_VELOG_ID,
      url_slug: slug,
    },
    query: `query ReadPost($username: String, $url_slug: String) {
      post(username: $username, url_slug: $url_slug) {
        id
        title
        released_at
        updated_at
        tags
        body
        short_description
        is_markdown
        is_private
        is_temp
        thumbnail
        comments_count
        url_slug
        likes
        liked
        user {
          id
          username
          profile {
            id
            display_name
            thumbnail
            short_bio
            profile_links
          }
          velog_config {
            title
          }
        }
        comments {
          id
          user {
            id
            username
            profile {
              id
              thumbnail
            }
          }
          text
          replies_count
          level
          created_at
          deleted
        }
        series {
          id
          name
          url_slug
          series_posts {
            id
            post {
              id
              title
              url_slug
              user {
                id
                username
              }
            }
          }
        }
        linked_posts {
          previous {
            id
            title
            url_slug
            user {
              id
              username
            }
          }
          next {
            id
            title
            url_slug
            user {
              id
              username
            }
          }
        }
      }
    }`,
  };

  try {
    const response = await fetch('https://v2cdn.velog.io/graphql', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => res.json());

    post = response.data.post;
    return post;
  } catch (e) {}
};
