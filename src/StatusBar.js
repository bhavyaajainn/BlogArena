import "./StatusBar.css";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
export const statusBar = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="logo"
        >
          BlogArena
        </div>
        <div className="navigation">
          <div className="actions">Home</div>
          <div className="actions">New</div>
          <div className="actions">Popular</div>
          <div className="actions">Trending</div>
          <div className="actions">Categories</div>
        </div>
      </div>
    </>
  );
};
