import "./footer.css";
import part3img from "./assets/images/image-gaming-growth.jpg";
import part1img from "./assets/images/image-retro-pcs.jpg";
import part2img from "./assets/images/image-top-laptops.jpg";
export const footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footercomponent">
          <img src={part1img} className="images"/>
          <div className="part">
            <div className="number">01</div>
            <div className="heading">Reviving The Retro PCs</div>
            <div className="text">What happens when old PCs are given modern Upgrades?</div>
          </div>
        </div>
        <div className="footercomponent">
          <img src={part2img} className="images"/>
          <div className="part">
            <div className="number">02</div>
            <div className="heading">Top 10 Laptops of 2022</div>
            <div className="text">Our best picks for various needs and budgets.</div>
          </div>
        </div>
        <div className="footercomponent">
          <img src={part3img} className="images"/>
          <div className="part">
            <div className="number">03</div>
            <div className="heading">The growth of Gaming</div>
            <div className="text">How the pandemic has sparked fresh opportunities.</div>
          </div>
        </div>
      </div>
    </>
  );
};
