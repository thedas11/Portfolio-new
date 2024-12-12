import ReactLoading from "react-loading";

const Loding = () => {
  return (
    <div className="loding-shim">
      <ReactLoading type="spokes" color="yellow" height={300} width={100} />
    </div>
  );
};

export default Loding;