// const config = useRuntimeConfig()
// nuxt.config.ts文件中的配置

export default defineEventHandler(async (event) => {
  // 1. 判断env
  if (process.env.NODE_ENV === 'development') {
    // 2. 判断url -> /api Y -> redirect /mock
    const url = getRequestURL(event)
    const whitelist = (process.env.MOCK_WHITELIST || '')?.split(',')
    // bugfix url.pathname与
    if (
      url.pathname.indexOf('/api') !== -1 &&
      url.pathname.indexOf('/api/_') === -1 &&
      whitelist.indexOf(url.pathname) === -1
    ) {
      const path = url.pathname.replace('/api', '/mock')
      return await sendProxy(event, `http://localhost:${process.env.PORT || 3000}${path}`)
    }
  }
})
