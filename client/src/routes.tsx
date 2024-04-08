import { Cards } from '@components/Cards'
import { Form } from '@components/Form'
import { FullCard } from '@components/FullCard'
import { Route, Routes } from 'react-router-dom'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Cards />} />
      <Route path="/form" element={<Form />} />
      <Route path="/cards/:id" element={<FullCard />} />
    </Routes>
  )
}
