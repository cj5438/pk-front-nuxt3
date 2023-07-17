export default defineEventHandler(() => {
  // env dev: api-> mock
  // env prod: api -> 正常请求
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
