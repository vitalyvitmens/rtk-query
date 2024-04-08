const Card = require('../models/card')

async function getCards(req, res) {
  try {
    const cards = await Card.find() // Получаем все карточки из базы данных
    res.status(200).send({
      data: cards,
    })
  } catch (err) {
    res.status(500).send({
      error: 'Failed to fetch cards from the database',
    })
  }
}

async function getCard(req, res) {
  const { id } = req.params
  try {
    const card = await Card.findById(id) // Находим карточку по ID в базе данных
    if (!card) {
      return res.status(404).send({
        error: 'Card not found',
      })
    }
    res.status(200).send(card)
  } catch (err) {
    res.status(500).send({
      error: 'Failed to fetch card from the database',
    })
  }
}

async function addCard(req, res) {
  const fullCard = req.body

  try {
    const newCard = new Card(fullCard) // Создаем новую карточку на основе данных из запроса
    await newCard.save() // Сохраняем новую карточку в базе данных
    res.status(200).send(newCard)
  } catch (err) {
    res.status(500).send({
      error: 'Failed to add card to the database',
    })
  }
}

async function deleteCard(req, res) {
  const { id } = req.params
  try {
    const deletedCard = await Card.findByIdAndDelete(id) // Находим и удаляем карточку по ID
    if (!deletedCard) {
      return res.status(404).send({
        error: 'Card not found',
      })
    }
    res.status(200).send({
      message: 'Card deleted successfully',
    })
  } catch (err) {
    res.status(500).send({
      error: 'Failed to delete card from the database',
    })
  }
}

module.exports = {
  getCards,
  getCard,
  addCard,
  deleteCard,
}
