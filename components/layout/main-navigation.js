import Link from 'next/link';

import Logo from './logo';
import classes from './main-navigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href='/'>
        
          <Logo />
        
      </Link>
      <nav>
        <ul>
          <li><Link href='/course'>课程</Link></li>
          <li>
            <Link href='/posts'>文章</Link>
          </li>
          <li>
            <Link href='/activity'>活动</Link>
          </li>
          <li><Link href='/competition'>竞赛</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;