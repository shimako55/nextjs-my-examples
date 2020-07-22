import InViewMonitor from "react-inview-monitor";
const Box = ({ animate }) => {
  const style = {
    with: "100%",
    height: "400px",
    background: "#ddd",
    margin: "40px 0 0 0",
  };
  return (
    <InViewMonitor
      classNameNotInView="vis-hidden"
      classNameInView={"animate__animated animate__" + animate}
    >
      <div style={style}></div>
    </InViewMonitor>
  );
};
const Page: React.FC = () => {
  return (
    <>
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
  );
};

export default Page;
