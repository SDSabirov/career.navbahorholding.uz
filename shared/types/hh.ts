/** Минимальные типы ответа API hh.ru (https://api.hh.ru/vacancies) */
export interface HhVacancy {
  id: string
  name: string
  alternate_url: string
}

export interface HhVacanciesResponse {
  items: HhVacancy[]
  found: number
  pages: number
  page: number
  per_page: number
}
