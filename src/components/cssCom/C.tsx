import lessStyles from "@/components/cssCom/app.less";
import scssStyles from "@/components/cssCom/app.scss";
import stylStyles from "@/components/cssCom/app.styl";
import smallImg from "@/assets/imgs/2.png";
import bigImg from "@/assets/imgs/1.jpeg";

import sty from "@/components/cssCom/icons.css";

function App() {
  return (
    <div>
      <h2>webpack5-react-ts</h2>
      <div className={lessStyles["lessBox"]}>
        <div className={lessStyles["box"]}>
          lessBox
          <img src={smallImg} alt="小于10kb的图片" />
          <img src={bigImg} alt="大于于10kb的图片" />
          <div className={lessStyles["smallImg"]}>小图片背景</div>
          <div className={lessStyles["bigImg"]}>大图片背景</div>
        </div>
      </div>
      <div className={scssStyles["scssBox"]}>
        <div className={scssStyles["box"]}>scssBox</div>
      </div>
      <div className={stylStyles["stylBox"]}>
        <div className={stylStyles["box"]}>stylBox</div>
      </div>
      <svg className={sty["icons"]} aria-hidden="true">
        <use xlinkHref="#icon-guanjunjiangbei"></use>
      </svg>
    </div>
  );
}

export default App;
