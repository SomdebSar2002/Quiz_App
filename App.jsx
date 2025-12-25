import Heading from "./Heading"
import React from 'react'
import Quiz from "./Quiz"
export default function App() {
    const [press,setpress] = React.useState(false)
  return (
    <>
    {(!press)&&<Heading ok={()=>{setpress(true)}}/>}
    {(press)&&<Quiz/>}
    </>
    )
}
