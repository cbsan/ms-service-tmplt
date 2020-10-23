import app from './app'

class Main {
  public constructor () {
    this.boot()
  }

  private boot (): void {
    app.listen(
      app.get('port'),
      (): void =>
        console.log(
          'Project "%s" is running at a http://0.0.0.0:%d in %s mode',
          app.get('projectName'),
          app.get('port'),
          app.get('env')
        )
    )
  }
}

export default new Main()
