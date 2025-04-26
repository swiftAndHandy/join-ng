import {AssignedPerson} from "./assigned-person.interface";
import {CategoryObject} from "./category.model";
import {SubtaskObject} from "./subtask.interface";

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

export type RenderedTaskObject = {
  id: number,
  title: string,
  description: string,
  priority: number,
  state: number,
  end_date: string,
  category: CategoryObject,
  subtasks: SubtaskObject[],
  assigned_users: AssignedPerson[],
  assigned_contacts: AssignedPerson[],
}

