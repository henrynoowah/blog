type Payload = {
  [key: string]: string | number | null
}

export const getPosts = async (searchParams: Payload): Promise<any[]> => {
  const { cursor, tag, search, limit } = searchParams
  const isSearch = !!search || !!tag
  const username = process.env.NEXT_PUBLIC_VELOG_ID
  const payload = !isSearch
    ? {
        operationName: 'Posts',
        variables: {
          username,
          limit,
          cursor,
          tag: tag ?? null
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
        }`
      }
    : {
        operationName: 'SearchPosts',
        variables: {
          keyword: search ?? tag,
          username
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
          }`
      }

  try {
    const response = await fetch('https://v2cdn.velog.io/graphql', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => res.json())

    return !isSearch ? response.data.posts : response.data.searchPosts.posts
  } catch (e) {
    return []
  }
}
