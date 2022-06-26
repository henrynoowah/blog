const NODE_ENV = process.env.NODE_ENV !== 'production'
const URL = 'blog'

module.exports = {
  'process.env.BACKEND_URL': !NODE_ENV ? `/${URL}` : '',
}

