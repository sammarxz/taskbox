import { type DropResult } from 'react-beautiful-dnd'

import {
  TaskActionTypes,
  type DeleteTaskAction,
  type AddTaskAction,
  type UpdateTaskAction,
  type ReorderTasksAction,
  type SetActiveTaskAction
} from './task.actions'

import { type TaskData } from './task.data'

export function addTask({ section, description }): AddTaskAction {
  return {
    type: TaskActionTypes.ADD_TASK,
    payload: {
      section,
      description
    }
  }
}

export function setActiveTask(task?: TaskData): SetActiveTaskAction {
  return {
    type: TaskActionTypes.SET_ACTIVE_TASK,
    payload: {
      task
    }
  }
}

export function deleteTask(sectionId: string, id: string): DeleteTaskAction {
  return {
    type: TaskActionTypes.DELETE_TASK,
    payload: {
      sectionId,
      id
    }
  }
}

export function updateTask(
  sectionId: string,
  task: TaskData
): UpdateTaskAction {
  return {
    type: TaskActionTypes.UPDATE_TASK,
    payload: {
      sectionId,
      task
    }
  }
}

export function reorderTasks(move: DropResult): ReorderTasksAction {
  return {
    type: TaskActionTypes.REORDER_TASKS,
    payload: {
      move
    }
  }
}

export interface TaskState {
  tasks: TaskData[]
}

export type TaskActions =
  | AddTaskAction
  | DeleteTaskAction
  | UpdateTaskAction
  | ReorderTasksAction
  | SetActiveTaskAction
