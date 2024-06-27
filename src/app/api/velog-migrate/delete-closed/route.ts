const token = process.env.GH_TOKEN
const owner = 'henrynoowah'
const repo = 'posts-dev'

const API_ROOT = `https://api.github.com/repos/${owner}/${repo}/issues`

export const GET = async (req: Request) => {
  const response = await fetch(API_ROOT, {
    headers: {
      Authorization: `token ${token}`,
      Accept: 'application/vnd.github+json'
    }
  })

  switch (response.status) {
    case 200: {
      const issue = await response.json()
      return Response.json(issue)
    }

    default: {
      return Response.json({})
    }
  }
}
