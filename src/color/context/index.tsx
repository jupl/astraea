import React, {Component, createContext} from 'react'

const TIMER = 4000

/** Props injected into component */
export interface Context {
  autoColor: boolean
  selectedColor: string
  previousColor(): void
  nextColor(): void
}

/** Initial context value for validation */
export const INITIAL_CONTEXT: Context = {
  autoColor: false,
  nextColor: undefined!,
  previousColor: undefined!,
  selectedColor: 'white',
}

/** Context */
export const Context = createContext(INITIAL_CONTEXT)
Object.assign(Context, {displayName: 'Color'})

/** Component properties */
export interface Props {
  colors: [string, ...string[]]
}

/** Provider implementation */
export class Provider extends Component<Props, Context> {
  /** Initial state */
  state = {
    autoColor: false,
    colors: this.props.colors,
    nextColor: () => {
      this.stopTimer()
      this.nextColor()
    },
    previousColor: () => {
      this.stopTimer()
      this.previousColor()
    },
    selectedColor: this.props.colors[0],
  }

  private intervalId?: number

  componentDidMount() {
    this.intervalId = window.setInterval(() => this.nextColor(), TIMER)
    this.setState({autoColor: true})
  }

  componentDidUpdate(props: Props) {
    if(this.props === props) { return }
    if(this.props.colors.includes(this.state.selectedColor)) { return }
    this.setState({selectedColor: this.props.colors[0]})
  }

  componentWillUnmount() {
    this.stopTimer()
  }

  render() { // tslint:disable-line:completed-docs
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }

  private nextColor() {
    this.jumpColor(1)
  }

  private previousColor() {
    this.jumpColor(-1)
  }

  private stopTimer() {
    window.clearInterval(this.intervalId)
    this.setState({autoColor: false})
  }

  private jumpColor(count: number) {
    this.setState(({selectedColor}) => {
      const {colors} = this.props
      const rawIndex = colors.indexOf(selectedColor) + count
      const index = (rawIndex % colors.length + colors.length) % colors.length
      return {selectedColor: colors[index]}
    })
  }
}
