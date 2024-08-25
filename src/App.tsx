import { Navbar } from "@/components/ui"
import { Home } from "@/pages"
import { Provider } from "react-redux"
import { store } from "@/app/store"
function App() {

  return (
    <Provider store={store}>
      <Navbar />
      <Home />
    </Provider>
  )
}

export default App
