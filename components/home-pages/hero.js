//导入需要的类
import Image from 'next/image';
import classes from './hero.module.css';

function Hero(){
    return <section className={classes.hero}>
        <div className={classes.image}>
           <Image src="/images/site/图标.png" alt="这是一个图标" width={300} height={300} /> 
        </div>
        <h1>这是一个仿掘金的网站</h1>
        <p>随意填充一点东西</p>
    </section>
}

export default Hero;