// const config = useRuntimeConfig()
// nuxt.config.ts文件中的配置

export default defineEventHandler(async (event) => {
  // 1. 判断env
  if (process.env.NODE_ENV === 'development') {
    // 2. 判断url -> /api Y -> redirect /mock
    const url = getRequestURL(event)
    // bugfix url.pathname与
    if (url.pathname.indexOf('/api') !== -1 && url.pathname.indexOf('/api/_') === -1) {
      console.log('in', url.pathname)
      const path = url.pathname.replace('/api', '/mock')
      return await sendProxy(event, (process.env.BASE_URL || 'http://localhost:3000') + path)
    }
  }
})
