import { Suspense } from "react"
import {  RouterProvider } from "react-router-dom"
import { APPRouter } from "./routes"

function App() {

  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <RouterProvider router={APPRouter} />
    </Suspense>
  )
}

export default App
