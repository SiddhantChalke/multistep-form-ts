import { ReactNode } from "react"

type FormWrapperProps = {
    title: string
    // to accept any jsx element
    children: ReactNode
}

export function FormWrapper({title, children}: FormWrapperProps){

    return (
        <>
            <h2>{title}</h2>
            <div style={{display: 'grid', gap:'1rem 0.5rem'}}>{children}</div>
        </>
    )
}