import React from 'react'

import html2canvas from 'html2canvas'
import * as StackBlur from 'stackblur-canvas'

import debounce from './debounce'
import imgNoise from './imgNoise'

type Props = {
  blur?: number
  position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed'
  left?: string | number
  top?: string | number
  width?: string | number
  height?: string | number
  colorOverlay?: string
  opacity?: number
  borderRadius?: string | number
  boxShadow?: string
}

class Acrylic extends React.Component<Props, {}> {
  static defaultProps = {
    blur: 20,

    position: 'fixed',
    left: 0,
    top: 0,
    width: 0,
    height: 0,

    colorOverlay: '#fff',
    opacity: 0.5,

    borderRadius: 0,
    boxShadow: ''
  }

  private contentEl: React.RefObject<HTMLElement>
  private blurEl: React.RefObject<HTMLElement>
  private canvas: HTMLCanvasElement | null
  constructor(props: Props) {
    super(props)
    this.contentEl = React.createRef()
    this.blurEl = React.createRef()
    this.canvas = null
  }

  showHideElement = () => {
    const $$acrylics = document.querySelectorAll('.js-acrylic')
    if ($$acrylics) {
      $$acrylics.forEach(($acrylic) => {
        ;($acrylic as HTMLElement).style.display = 'none'
        // $acrylic.style.transition = 'opacity 1s'
        const vv = setTimeout(() => {
          ;($acrylic as HTMLElement).style.display = 'block'
          clearTimeout(vv)
        }, 20)
      })
    }
  }

  componentDidMount() {
    const self = this
    // not capturing this element

    this.showHideElement()

    // capturing body
    const init = (firstTime: boolean) => {
      html2canvas(document.body).then(
        // logging: true,
        function (canvas: HTMLCanvasElement) {
          self.canvas = canvas

          // eslint-disable-next-line no-unused-expressions
          self.blurEl.current?.appendChild(self.canvas)

          canvas.style.position = 'absolute'
          const clientRect = canvas.getBoundingClientRect()

          canvas.style.top = `${-clientRect.top + window.scrollY}px`
          canvas.style.left = `${-clientRect.left + window.scrollX}px`
          self.canvas.style.transform = `translate(-${window.scrollX}px, -${window.scrollY}px)`
          if (firstTime) {
          }

          let blurv
          self.props.blur ? (blurv = self.props.blur) : (blurv = 30)

          // blurring body
          StackBlur.canvasRGB(canvas, 0, 0, canvas.width, canvas.height, blurv)
        }
      )
    }

    init(true)
    window.addEventListener('scroll', () => {
      if (this.props.position === 'fixed') {
        if (self.canvas) {
          self.canvas.style.transform = `translate(-${window.scrollX}px, -${window.scrollY}px)`
        }
      }
    })
    window.addEventListener(
      'resize',
      debounce(() => {
        // console.log(self.canvas.width)
        if (this.blurEl.current) {
          this.blurEl.current.innerHTML = ''
        }
        setTimeout(() => {
          this.showHideElement()
          init(false)
        }, 10)
        if (this.canvas) {
          this.canvas.width = window.innerWidth
        }
        // self.canvas.height = window.innerHeight
      }, 100)
    )
  }

  render() {
    const {
      position = 'fixed',
      left = 0,
      top = 0,
      width = 0,
      height = 0,
      colorOverlay = '#fff',
      opacity = 0.5,
      borderRadius = 0,
      boxShadow = ''
    } = this.props
    return (
      <span className='js-acrylic'>
        <span
          ref={this.contentEl}
          style={{
            position: position,
            left: left,
            top: top,
            height: height,
            width: width,
            borderRadius: borderRadius,
            boxShadow: boxShadow,
            zIndex: 2
          }}
        >
          <span
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              borderRadius: borderRadius,
              background: colorOverlay,
              opacity: opacity,
              content: '',
              zIndex: -1
            }}
          />
          <span
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              borderRadius: borderRadius,
              background: `url(${imgNoise})`,
              opacity: opacity / 3,
              content: '',
              zIndex: -2
            }}
          />
          {this.props.children}
        </span>
        <span
          style={{
            position: position,
            left: left,
            top: top,
            height: height,
            width: width,
            borderRadius: borderRadius,
            boxShadow: boxShadow,
            zIndex: 1,
            overflow: 'hidden'
          }}
          ref={this.blurEl}
        />
      </span>
    )
  }
}

export default Acrylic
