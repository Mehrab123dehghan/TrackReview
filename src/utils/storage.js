const DB_KEY = 'trackreview.demo.database.v2'
const LEGACY_REQUESTS_KEY = 'trackreview.demo.requests.v1'

const initialDatabase = {
  users: [],
  requests: [],
  transactions: [],
  feedback: [],
}

export function getDatabase() {
  try {
    const saved = window.localStorage.getItem(DB_KEY)
    if (saved) {
      const parsed = JSON.parse(saved)
      return { ...initialDatabase, ...parsed }
    }
    const legacyRequests = JSON.parse(window.localStorage.getItem(LEGACY_REQUESTS_KEY) || '[]')
    return { ...initialDatabase, requests: Array.isArray(legacyRequests) ? legacyRequests : [] }
  } catch {
    return { ...initialDatabase }
  }
}

export function saveDatabase(database) {
  try {
    window.localStorage.setItem(DB_KEY, JSON.stringify(database))
    return true
  } catch {
    return false
  }
}

export function getRequests() { return getDatabase().requests }

export function saveRequest(request) {
  const database = getDatabase()
  database.requests = [request, ...database.requests]
  return saveDatabase(database)
}

