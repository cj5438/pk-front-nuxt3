export default defineEventHandler(() => {
  // env dev: api-> mock
  // env prod: api -> 正常请求
  // $fetch -> nuxt3
  return {
    code: 200,
    data: {
      swipers: [],
      'swiper-projects': [],
      projects: [],
      courses: []
    }
  }
})
