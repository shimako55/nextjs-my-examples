import { useInView } from 'react-intersection-observer'

const Box: React.FC<{ animate: string }> = (props) => {
  const options = {
    threshold: 0,
    triggerOnce: true,
  }
  const [ref, inView, entry] = useInView(options)

  return (
    <div
      ref={ref}
      className={
        inView ? `animate__animated animate__${props.animate}` : 'hidden'
      }
      style={{
        width: '100%',
        height: '400px',
        background: '#ddd',
        margin: '80px 0 0 0',
      }}
    >
      <h1>{`Header inside viewport ${inView}.`}</h1>
      <pre>{JSON.stringify(options, null, 4)}</pre>
    </div>
  )
}
const Page: React.FC = () => {
  return (
    <>
      <a href="https://animate.style/">animate.css</a>
      <Box animate="bounce" />
      <Box animate="fadeIn" />
      <Box animate="fadeInDown" />
      <Box animate="fadeInDownBig" />
      <Box animate="fadeInLeft" />
      <Box animate="fadeInLeftBig" />
      <Box animate="fadeInRight" />
      <Box animate="fadeInRightBig" />
      <Box animate="fadeInUp" />
    </>
  )
}

export default Page
