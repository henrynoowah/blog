import { Locale } from '@/i18n.config'

type IssuesPayload = {
  locale?: Locale
  labels?: string[]
  search?: string | null
  page?: number
}

export const getGithubIssues = async (payload: IssuesPayload) => {
  const baseUrl = typeof window === 'undefined' ? process.env.NEXTAUTH_URL : ''

  try {
    const response = await fetch(baseUrl + '/api/gh-issues', {
      method: 'POST',
      body: JSON.stringify({ ...payload })
    })

    const issues = await response.json()
    return issues
  } catch (e) {
    console.error(e)
  }
}

export const getGithubIssue = async (issueNumber: string) => {
  const baseUrl = typeof window === 'undefined' ? process.env.NEXTAUTH_URL : ''
  try {
    const response = await fetch(baseUrl + '/api/gh-issues/' + issueNumber, { method: 'GET' })
    const issue = await response.json()
    return issue
  } catch (e) {
    console.error(e)
  }
}
