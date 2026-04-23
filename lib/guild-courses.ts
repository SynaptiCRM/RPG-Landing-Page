export const VALID_COURSE_VALUES = new Set([
  "scratch",
  "game-design",
  "roblox",
  "python-kids",
  "websites",
])

export const COURSE_OPTIONS = [
  { value: "scratch", label: "Курс Scratch" },
  { value: "game-design", label: "Курс Game Design" },
  { value: "roblox", label: "Курс Roblox" },
  { value: "python-kids", label: "Курс Python для дітей" },
  { value: "websites", label: "Курс Створення сайтів" },
] as const

export function getCourseLabel(courseId: string): string | undefined {
  return COURSE_OPTIONS.find((o) => o.value === courseId)?.label
}
