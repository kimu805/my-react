import { useState } from "react";

export default function StateForm() {
  const [form, setForm] = useState({
    name: "山田太郎",
    age: 18
  })

  const handleForm = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const show = () => {
    console.log(`こんにちは！${form.name} (${form.age}歳)さん`)
  }

  return (
    <form>
      <div>
        <label htmlFor="name">名前：</label>
        <input type="text" id="name" name="name" onChange={handleForm} value={form.name} />
      </div>
      <div>
        <label htmlFor="age">年齢：</label>
        <input type="number" id="age" name="age" onChange={handleForm} value={form.age} />
      </div>
      <div>
        <button type="button" onClick={show}>送信</button>
      </div>
      <p>こんにちは！{form.name} ({form.age}歳)さん</p>
    </form>
  )
}