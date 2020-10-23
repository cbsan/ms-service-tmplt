/* eslint-disable @typescript-eslint/class-name-casing */
interface ErrorExpressValidator {
  location: string
  msg: string
  value: string
  param: string
}

export default class HandleErrorExpressValidator extends Error {
  public statusCode: number = 400
  public errors: string[]
  public validationErrors: ErrorExpressValidator[]
  public message: string

  public constructor (err: any, statusCode?: number) {
    super()
    // message && (this.message = message)
    statusCode && (this.statusCode = statusCode)
    this.validationErrors = err.array()
    this.mapError()
  }

  private mapError () {
    const errors = {} as any
    for (let index in this.validationErrors) {
      const element = this.validationErrors[index]
      errors[element.param] = element.msg
    }

    this.errors = errors
  }
}
