export default function taskReducer(state, action) {
    switch(action.type) {
        case 'add': {
            return [
                ...state, {
                id: state.tasks.length===0 ? 0 : state.tasks[state.tasks.length-1]+1,
                title: action.title
            }]
        }
        case 'update': {
            return state.map(i => (i.id===action.task.id ? {...action.task} : i))
        }
        case 'delete': {
            return state.filter(i => i.id!==action.task.id)
        }
        default: return [...state]
    }
}