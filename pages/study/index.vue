<template>
  <div class="pb-15">
    <!-- 推荐内容 -->
    <div v-for="(course, index) in store.lists" :key="index">
      <template v-if="course.courses.length > 0">
        <Container>
          <div class="text-xl py-2 lg:(text-3xl pb-2 pt-6) font-bold">{{ course.name }}</div>
        </Container>
        <Container>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full lt-sm:px-4 py-4">
            <a
              href=""
              target="_blank"
              v-for="(item, index) in course.courses"
              :key="index"
              class="flex"
            >
              <Card
                class="w-full rounded-3 transition-all hover:(transform-translate-y--1 shadow-lg)"
                :image="item.coverId + ''"
                image-type="rounded"
                :title="item.title"
                border
              >
                <template #default>
                  <div
                    class="px-2 py-1 lg:(px-4 mb-4) flex items-center justify-start text-gray-500 text-xs lg:text-base"
                  >
                    <span class="mr-2">{{ item.users.name }}</span
                    >|
                    <span class="ml-2">前端课程</span>
                  </div>
                  <div
                    class="px-2 py-1 lg:(px-4 mb-4) flex items-center justify-between text-gray-500 mb-4 text-xs lg:text-base"
                  >
                    <div>
                      <span class="mr-2 text-orange">￥{{ item.price }}</span>
                      <span>{{ item.counts }}人学习</span>
                    </div>
                    <div class="i-mdi:cart lg:text-xl xl:text-3xl text-sky-400"></div>
                  </div>
                </template>
              </Card>
            </a>
          </div>
        </Container>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import bg from 'assets/images/bg.png'
import { useStudyStore } from '@/stores/useStudyStore'

const store = useStudyStore()

await store.getCourseList()

const activeIndex = ref(0)

const recommend = ref([
  {
    image: bg,
    title:
      '第四期开始报名了！行业风口、政策倾斜，新晋热门高薪不内卷！打通从0基础到高薪就业完整路径，抢占先发优势！',
    comments: '9',
    url: 'https://class.imooc.com/sale/embedded',
    hours: '350 小时',
    counts: '227',
    price: ' 12999.00',
    originPrice: ' 14999'
  },
  {
    image: bg,
    title: '前端入门如同写字，如果你不知道从哪开始，那就选择前端（含Vue3.x，React17,TS）',
    comments: '9',
    url: 'https://class.imooc.com/sale/fe2021',
    hours: '350 小时',
    counts: '227',
    price: ' 4666.00',
    originPrice: ' 5980'
  },
  {
    image: bg,
    title:
      '以一线互联网公司产品标准，打造适合零基础学习的全干货Java课程。选择Java，高薪就业的第一步！',
    comments: '9',
    url: 'https://class.imooc.com/sale/java2021',
    hours: '350 小时',
    counts: '227',
    price: ' 4429.00',
    originPrice: ' 5680'
  },
  {
    image: bg,
    title: '未来3-5年企业高性能项目不可替代的语言，从基础到项目实战再到重构，真正从入门到精通',
    comments: '9',
    url: 'https://class.imooc.com/sale/newgo',
    hours: '350 小时',
    counts: '227',
    price: ' 3099.00',
    originPrice: ' 3888'
  }
])
</script>

<style scoped></style>
