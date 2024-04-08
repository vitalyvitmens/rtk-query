import React, { useState } from 'react'
import styles from './Form.module.css' // Подключаем CSS-модули
import { useAddCardMutation } from '@services/cards/cards'

export const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    img: '',
    story: '',
  })

  const [addCard] = useAddCardMutation()
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Отправка данных на сервер с помощью useAddCardMutation
    addCard({ fullCard: formData })
    // Очистка формы после отправки данных
    setFormData({
      title: '',
      description: '',
      img: '',
      story: '',
    })
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Имя героя"
        value={formData.title}
        onChange={handleChange}
        className={styles.input}
      />
      <input
        type="text"
        name="description"
        placeholder="Описание"
        value={formData.description}
        onChange={handleChange}
        className={styles.input}
      />
      <textarea
        name="story"
        placeholder="История о персонаже"
        value={formData.story}
        onChange={handleChange}
        className={styles.textarea}
      />
      <input
        type="text"
        name="img"
        placeholder="Ссылка на изображение"
        value={formData.img}
        onChange={handleChange}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Отправить
      </button>
    </form>
  )
}
