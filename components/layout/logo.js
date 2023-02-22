import Image from "next/image";
import classes from './logo.module.css';

function Logo() {
  return (
  //<>
  //<div className={classes.images} >
   // <Image src="/images/site/图标.png" alt="这是一个图标" width={40} height={40}/>
   //</div>
  <div className={classes.logo}>稀土掘金</div>
  //</>
  );
}

export default Logo;