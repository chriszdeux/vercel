import { FC, PropsWithChildren } from "react"

type Props = {
  children: React.ReactNode
}
export const DarkLayout: FC<Props> = ({ children }) => {
  return (
    <div style={{
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: '10px',
      borderRadius: '5px'
    }}>
      <h2>Dark Layout</h2>
      <div>
        { children }
      </div>
    </div>
  )
}
