export interface SubtaskObject {
  id: number;
  description: string;
  edited_description?: string;
  edit_mode?: boolean;
  completed: boolean;
  taskId: number;
}
