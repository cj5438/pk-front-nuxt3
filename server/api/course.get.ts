export default defineEventHandler(async (event) => {
  // const body = await readBody(event)
  // nestjs -> $fetch => /api/v1/course
  const fetch = (url: string) =>
    $fetch(url, {
      // method: 'POST',
      baseURL: process.env.BASE_URL
      // body
    })
  return fetch('/api/v1/course')
})
