export const Exercise10 = () => {

    const handleClick = () => {
        alert('Double-Clicked!!!!')
    }

    return (
        <button onClick={handleClick}>Do not double-click!</button>
    )
}