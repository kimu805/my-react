import "./StateCounter.css"

export default function StateCounter({ step, onUpdate }) {
  const handelClick = () => onUpdate(step)

  return (
    <button className="cnt" onClick={handelClick}>
      <span>{step}</span>
    </button>
  )
}