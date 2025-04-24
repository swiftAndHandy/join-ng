type TaskOverview = {
  'end_date': string,
  'priority': number,
  'state': number
}

export type Summary = [
  TaskOverview
] | []
