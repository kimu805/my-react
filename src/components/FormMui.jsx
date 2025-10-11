import { Button, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

export default function FormMui() {
  const defaultValues = {
    name: "木村一翔", 
    email: "kimukimuok805@gmail.com", 
    gender: "male",
    memo: ""
  }

  const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({
    defaultValues
  })

  const onsubmit = data => console.log(data)
  const onerror = err => console.log(err)

  return (
    <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
      <div>
        <TextField label="名前" margin="normal"
          {...register("name", {
            required: "名前は必須入力です。",
            maxLength: {
              value: 20,
              message: "名前は20文字以内にしてください。"
            }
          })} error={"name" in errors} helperText={errors.name?.message} />
      </div>
      <div>
        <FormControl>
          <FormLabel component="legend">性別：</FormLabel>
          <RadioGroup name="gender">
            <FormControlLabel value="male" control={<Radio />} label="男性"
              {...register("gender", {
                required: "性別は必須です。",
              })} />
            <FormControlLabel value="female" control={<Radio />} label="女性"
              {...register("gender", {
                required: "性別は必須です。"
              })} />
          </RadioGroup>
          <FormHelperText error={"gender" in errors}>
            {errors.gender?.message}
          </FormHelperText>
        </FormControl>
      </div>

      <div>
        <TextField type="email" label="メールアドレス" margin="normal"
          {...register("email", {
            required: "メールアドレスは必須です。",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: "メールアドレスの形式が不正です。"
            }
          })} error={"memo" in errors} helperText={errors.email?.message} />
      </div>

      <div>
        <TextField label="メモ" margin="normal" multiline
          {...register("memo", {
            required: "備考は必須入力です。", 
            minLength: {
              value: 10,
              message: "備考は10文字以上入力してください。"
            }
          })} error={"memo" in errors} helperText={errors.memo?.message} />
      </div>

      <div>
        <Button variant="contained" type="submit">送信</Button>
      </div>
    </form>
  )
}