// Store
export interface RootState {
  todos: TodoState,
  login: LoginState
}
export interface TodoState {
  todos: Todo[];
}

export interface LoginState {
  user: string;
  isLoggedIn: boolean;
}

// Models
export interface Todo {
  text: string;
  checked: boolean;
}
