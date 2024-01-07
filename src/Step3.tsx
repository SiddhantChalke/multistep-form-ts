import { FormWrapper } from "./FormWrapper"

type AccountData = {
    email: string
    password: string
  }
  
  type Step3Props = AccountData & {
    updateFields: (fields: Partial<AccountData>) => void
  }

export function Step3({email, password, updateFields
}: Step3Props){
    return (
        <>
        <FormWrapper title='Account Details'>
            <label>Email</label>
      <input
        autoFocus
        required
        type="email"
        value={email}
        onChange={e => updateFields({ email: e.target.value })}
      />
      <label>Password</label>
      <input
        required
        type="password"
        value={password}
        onChange={e => updateFields({ password: e.target.value })}
      />

</FormWrapper>
        </>
    )
}