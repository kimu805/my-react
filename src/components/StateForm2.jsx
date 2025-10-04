import { useState } from "react";

export default function StateForm2() {
  const [form, setForm] = useState({
    name: "木村一翔",
    age: 24
  })

  const create = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value 
    })
  }

  const show = () => {
    console.log(`こんにちは！${form.name} (${form.age}歳)さん！`)
  }

  return (
    <form>
      <div>
        <label htmlFor="name">名前：</label>
        <input type="text" name="name" id="name" onChange={create} value={form.name} />
      </div>
      <div>
        <label htmlFor="age">年齢：</label>
        <input type="number" name="age" id="age" onChange={create} value={form.age} />
      </div>
      <div>
        <button type="button" onClick={show}>送信</button>
      </div>
      <hr />
      <p>こんにちは！{form.name} ({form.age}歳)さん！</p>
    </form>
  )

}