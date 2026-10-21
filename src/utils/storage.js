const REQUESTS_KEY = 'trackreview.demo.requests.v1'

export function getRequests() {
  try {
    const saved = window.localStorage.getItem(REQUESTS_KEY)
    if (!saved) return []
    const parsed = JSON.parse(saved)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function saveRequest(request) {
  try {
    const current = getRequests()
    window.localStorage.setItem(REQUESTS_KEY, JSON.stringify([request, ...current]))
    return true
  } catch {
    return false
  }
}

