import React from 'react';
import classes from '../../components/HeaderComponent/styles.module.css';
import { faStar as fasFaStart } from '@fortawesome/free-solid-svg-icons';
import { faStar as farFaStart } from '@fortawesome/free-regular-svg-icons';
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Main = ({ link, setLink }) => {

    return (
        <div className={classes.main}>
            <div className={classes.item_box}>
                <div>
                    <Link onClick={() => {
                        setLink('https://themesflat.co/html/educate/images/index/course1.jpg');
                    }} to='/posts'>
                        <img src="https://themesflat.co/html/educate/images/index/course1.jpg" alt="" />
                    </Link>
                </div>

                <div>
                    <h2>
                        Photoshop - Web Deisgn
                    </h2>

                    <span className={classes.price}>
                        $290
                    </span>

                    <div>
                        <FontAwesomeIcon icon={fasFaStart} />
                        <FontAwesomeIcon icon={fasFaStart} />
                        <FontAwesomeIcon icon={fasFaStart} />
                        <FontAwesomeIcon icon={faStarHalfStroke} />
                        <FontAwesomeIcon icon={farFaStart} />
                        <span> 25 Reviews </span>
                    </div>

                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem est minus nemo vitae architecto, recusandae blanditiis pariatur commodi quae natus!
                    </p>

                    <div className={classes.wrapper_box}>
                        <div className={classes.wrapper_item}>
                            <p>
                                1 year
                            </p>
                            <p>
                                Course
                            </p>
                        </div>
                        <div className={classes.wrapper_item}>
                            <p>
                                1 year
                            </p>
                            <p>
                                Course
                            </p>
                        </div>
                        <div className={classes.wrapper_item}>
                            <p>
                                1 year
                            </p>
                            <p>
                                Course
                            </p>
                        </div>

                    </div>

                </div>
            </div>
            <div className={classes.item_box}>
                <div>
                    <Link onClick={() => {
                        setLink('https://themesflat.co/html/educate/images/index/course2.jpg')
                    }} to="/posts">
                        <img src="https://themesflat.co/html/educate/images/index/course2.jpg" alt="" />
                    </Link>

                </div>

                <div>
                    <h2>
                        Photoshop - Web Deisgn
                    </h2>

                    <span className={classes.price}>
                        $290
                    </span>

                    <div>
                        <FontAwesomeIcon icon={fasFaStart} />
                        <FontAwesomeIcon icon={fasFaStart} />
                        <FontAwesomeIcon icon={fasFaStart} />
                        <FontAwesomeIcon icon={faStarHalfStroke} />
                        <FontAwesomeIcon icon={farFaStart} />
                        <span> 25 Reviews </span>
                    </div>

                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem est minus nemo vitae architecto, recusandae blanditiis pariatur commodi quae natus!
                    </p>

                    <div className={classes.wrapper_box}>
                        <div className={classes.wrapper_item}>
                            <p>
                                1 year
                            </p>
                            <p>
                                Course
                            </p>
                        </div>
                        <div className={classes.wrapper_item}>
                            <p>
                                1 year
                            </p>
                            <p>
                                Course
                            </p>
                        </div>
                        <div className={classes.wrapper_item}>
                            <p>
                                1 year
                            </p>
                            <p>
                                Course
                            </p>
                        </div>

                    </div>

                </div>
            </div>
            <div className={classes.item_box}>
                <div>
                    <Link onClick={() => {
                        setLink('https://themesflat.co/html/educate/images/index/course3.jpg')
                    }} to="/posts">
                        <img src="https://themesflat.co/html/educate/images/index/course3.jpg" alt="" />
                    </Link>

                </div>

                <div>
                    <h2>
                        Photoshop - Web Deisgn
                    </h2>

                    <span className={classes.price}>
                        $290
                    </span>

                    <div>
                        <FontAwesomeIcon icon={fasFaStart} />
                        <FontAwesomeIcon icon={fasFaStart} />
                        <FontAwesomeIcon icon={fasFaStart} />
                        <FontAwesomeIcon icon={faStarHalfStroke} />
                        <FontAwesomeIcon icon={farFaStart} />
                        <span> 25 Reviews </span>
                    </div>

                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem est minus nemo vitae architecto, recusandae blanditiis pariatur commodi quae natus!
                    </p>

                    <div className={classes.wrapper_box}>
                        <div className={classes.wrapper_item}>
                            <p>
                                1 year
                            </p>
                            <p>
                                Course
                            </p>
                        </div>
                        <div className={classes.wrapper_item}>
                            <p>
                                1 year
                            </p>
                            <p>
                                Course
                            </p>
                        </div>
                        <div className={classes.wrapper_item}>
                            <p>
                                1 year
                            </p>
                            <p>
                                Course
                            </p>
                        </div>

                    </div>

                </div>
            </div>



        </div>
    );
}

export default Main;
