import { InputField } from './InputStyles.ts'

export function Input({...rest }: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  return (
    <InputField
      placeholder="Adicione uma nova tarefa"
      {...rest}
    />
  )
}