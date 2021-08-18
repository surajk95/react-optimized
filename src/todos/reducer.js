export default function taskReducer(tasks, action) {
    switch(action.type) {
        case 'add': {
            return [
                ...tasks, {
                id: tasks.length===0 ? 0 : tasks[tasks.length-1].id+1,
                title: action.item
            }]
        }
        case 'update': {
            return tasks.map(i => (i.id===action.item.id ? {...action.item} : i))
        }
        case 'delete': {
            return tasks.filter(i => i.id!==action.item.id)
        }
        default: return [...tasks]
    }
}