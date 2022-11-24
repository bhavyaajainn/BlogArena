import "./Body.css";
import Button from '@mui/material/Button';
import img from './assets/images/image-web-3-desktop.jpg'
export const body = () => {
  return (
    <>
      <div style={{ display: "flex" ,justifyContent:"space-between"}}>
        <div className="blogContent">
          <img
            src={img}
            alt="any"
            width="100%"
            height="100%"
            className="image"
          />
          <div style={{ display: "flex", padding:"2px", justifyContent:"space-around"}}>
            <bold className="question">The Bright Future Of Web 3.0? </bold>
            <div className="description">
              Web3 is going to change the web completely. It will move the web
              to a decentralized position. This means that there isn’t a big
              company or the government that registers everything and has
              control over everything on the web. So what is the future for
              Web3?
              <br />
              <div className="btn"><Button variant="contained">Read more</Button></div>
            </div>
          </div>
        </div>
        <div
          className="newBlog"
        >
          <div className="new">New</div>
          <div>
            <div className="newHeading">Hydrogen VS Electric Cars</div>
            <div className="newHelperData">Will hydrogen fueled cars ever catch up to EVs?</div>
          </div>
          <div className="captionLight">.</div>
          <div>
            <div className="newHeading">The downside of AI Artistry</div>
            <div className="newHelperData">What are the possible adverse effects of om demand AI image generation?</div>
          </div>
          <div className="captionLight">.</div>
          <div>
            <div className="newHeading">Is VC funding drying up</div>
            <div className="newHelperData">Private funding by VC firms is down 50% YOY. We take a look at what that means.</div>
          </div>
        </div>
      </div>
    </>
  );
};
