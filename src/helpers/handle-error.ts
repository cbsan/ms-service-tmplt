/* eslint-disable @typescript-eslint/class-name-casing */
export default class HandleError extends Error {
  public slug: string

  public message: string

  public statusCode: number

  public constructor (slug: string, message: string, statusCode: number) {
    super()
    this.slug = slug
    this.message = message
    this.statusCode = statusCode
  }
}
