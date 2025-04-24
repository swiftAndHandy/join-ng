export interface TaskObject {
  'id'?: number,
  'title': string,
  'description'?: string,
  'priority': number,
  'state': number,
  'end_date': string,
  'category': number,
  'assigned_users': number[],
  'assigned_contacts': number[]
}
