const token = process.env.GH_TOKEN
const owner = 'henrynoowah'
const repo = 'posts-dev'

const API_ROOT = 'https://api.github.com/search/issues'

export const POST = async (req: Request) => {
  const body = await req.json()

  const { locale, labels, search, page } = body

  let labelString = ''
  if (Array.isArray(labels) && labels.length > 0) {
    labelString =
      '+' +
      labels
        .filter((x) => !!x)
        .map((l) => `label:${l}`)
        .join('+')
  }

  const queryString =
    `?q=${search ?? ''}+repo:${owner}/${repo}+is:issue+is:open` + (locale ? `+label:${locale}` : '') + `${labelString}`
  const apiUrl = API_ROOT + queryString + `&page=${!!page ? page : 1}&per_page=20&sort=created&order=desc`

  const response = await fetch(apiUrl, {
    headers: {
      Authorization: `token ${token}`,
      Accept: 'application/vnd.github+json'
    }
  })

  switch (response.status) {
    case 200: {
      const searchResults = await response.json()
      return Response.json(searchResults.items)
    }

    default: {
      return Response.json([])
    }
  }
}
