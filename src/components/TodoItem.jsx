const TodoItem = ({task, onRemove}) => {
    return (
        <>
            <p>{task}<button onClick={() => {onRemove(task)}}>x</button></p>
        </>
    )
}

export default TodoItem