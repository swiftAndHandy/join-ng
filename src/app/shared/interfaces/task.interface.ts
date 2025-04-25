import {AssignedPerson} from "./assigned-person.interface";

export type TaskObject = {
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

export type SubtaskObject = {
  id: number,
  description: string,
  completed: boolean,
  task: number
}

export type RenderedTaskObject = {
  id: number,
  title: string,
  description: string,
  priority: number,
  state: number,
  end_date: string,
  category: number,
  assigned_users: AssignedPerson[],
  assigned_contacts: AssignedPerson[],
}

