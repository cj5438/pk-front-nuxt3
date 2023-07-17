import { GetCoursesInterface } from './types'

export const useStudyStore = defineStore('study', {
  state: () => ({
    lists: [] as GetCoursesInterface[]
  }),
  actions: {
    async getCourseList() {
      const res = await useFetch('/api/course')
      if (res.status.value === 'success') {
        if (res.data && res.data.value && res.data.value instanceof Array) {
          this.lists = res.data.value as GetCoursesInterface[]
        }
      } else {
        console.error('获取课程列表接口失败', res)
      }
    }
  }
})
