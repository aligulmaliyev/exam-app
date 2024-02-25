import { Suspense } from "react"
import {  RouterProvider } from "react-router-dom"
import { APPRouter } from "./routes"
import { Loader } from "./components/Loader"

function App() {

  return (
    <Suspense fallback={<Loader/>}>
      <RouterProvider router={APPRouter} />
    </Suspense>
  )
}

export default App
