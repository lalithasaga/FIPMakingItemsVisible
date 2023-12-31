import {Fragment} from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
const Header = props =>{
  return <Fragment>
    <header className={classes.Header}>
    <h1>ReactMeals</h1>
    <HeaderCartButton></HeaderCartButton>
    </header>
    <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table fullof delicious food!'/>
    </div>
  </Fragment>
};

export default Header;

