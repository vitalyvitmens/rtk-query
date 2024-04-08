export type GetCardsApiResponse = /** status 200 card response */ Cards
export type GetCardsApiArg = void
export type AddCardApiResponse = /** status 200 card response */ Card
export type AddCardApiArg = {
  /** Card to add to the store */
  fullCard: FullCard
}
export type GetCardByIdApiResponse = /** status 200 card response */ FullCard
export type GetCardByIdApiArg = {
  /** ID of card to fetch */
  id: string
}
export type DeleteCardApiResponse = /** status 204 card deleted */ void
export type DeleteCardApiArg = {
  /** ID of card to delete */
  id: number
}
export type NewCard = {
  title: string
  description?: string
  img?: string
}
export type Card = NewCard & {
  _id: string
}
export type Cards = {
  data?: Card[]
}
export type Error = {
  message: string
}
export type FullCard = NewCard & {
  story?: string
}
