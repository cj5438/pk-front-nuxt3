// Generated by https://quicktype.io

export interface GetCoursesInterface {
  id: number
  name: string
  courses: Course[]
}

export interface Course {
  id: number
  title: string
  subTitle: string
  desc: string
  coverId?: number
  author: number
  originPrice: string
  price: number
  status: number
  counts: number
  order: number
  detail: string
  type: string
  createdAt: string
  updatedAt: string
  users: Users
}

export interface Users {
  id: number
  username: string
  name: string
  type: number
  expired: string
  status: number
  phone: string
  email: string
  unionId: string
  openId: string
  createdAt: string
  updatedAt: string
}
