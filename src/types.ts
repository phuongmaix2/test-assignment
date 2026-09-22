export type Todo = {
  description: string;
  date: string;
  priority: 'low' | 'medium' | 'high';
}

export type TodoTableProps = {
  todos: Todo[];
}