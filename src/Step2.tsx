import { FormWrapper } from "./FormWrapper"

type Step2Data = {
    street: string
    city: string
    state: string
    zip: string
  }
  
  type Step2Props = Step2Data & {
    updateFields: (fields: Partial<Step2Data>) => void
  }

export function Step2({
    street,
    city,
    state,
    zip,
    updateFields,
  }: Step2Props){
    
    return (
        <>
        <FormWrapper title='Address Details'>
            
            <label>Street</label>
      <input
        autoFocus
        required
        type="text"
        value={street}
        onChange={e => updateFields({ street: e.target.value })}
      />
      <label>City</label>
      <input
        required
        type="text"
        value={city}
        onChange={e => updateFields({ city: e.target.value })}
      />
      <label>State</label>
      <input
        required
        type="text"
        value={state}
        onChange={e => updateFields({ state: e.target.value })}
      />
      <label>Zip</label>
      <input
        required
        type="text"
        value={zip}
        onChange={e => updateFields({ zip: e.target.value })}
      />

</FormWrapper>

        </>
    )
}