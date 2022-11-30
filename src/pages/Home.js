import homeImg from "../media/home.png";
function Home() {
  return (
    <div className="flex-box center-box">
      <div className="center-box">
        <img src={homeImg} className="home-img"></img>
      </div>
    </div>
  );
}

export default Home;
