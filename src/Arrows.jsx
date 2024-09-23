export default function Arrows({onMove}) {
    return (
        <div id='arrows'>
            <span id='up' onClick={() => onMove(0, -10)}>⬆️</span>
            <span id='left' onClick={() => onMove(-10, 0)}>⬅️</span>
            <span id='down' onClick={() => onMove(0, 10)}>⬇️</span>
            <span id='right' onClick={() => onMove(10, 0)}>➡️</span>
        </div>
    )
}