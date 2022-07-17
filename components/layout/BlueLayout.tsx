import { FC } from "react"
type myChildren = {
  children: React.ReactNode
}
export const BlueLayout: FC<myChildren> = ({ children }) => {
  return (
    <div style={{
      backgroundColor: 'lightblue',
      border: '1px solid lightgreen',
      padding: '15px'
    }}>
      <h2>Blue theme</h2>
      <div>
        { children }
      </div>
    </div>
  )
}
