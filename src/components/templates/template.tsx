"use client";

import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';
import "../../../public/mncsek/assets/vendor/aos/aos.css"
import "../../../public/mncsek/assets/vendor/bootstrap/css/bootstrap.min.css"
import "../../../public/mncsek/assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../../../public/mncsek/assets/vendor/boxicons/css/boxicons.min.css"
import "../../../public/mncsek/assets/vendor/glightbox/css/glightbox.min.css"
import "../../../public/mncsek/assets/vendor/remixicon/remixicon.css"
import "../../../public/mncsek/assets/vendor/swiper/swiper-bundle.min.css"
import "../../../public/mncsek/assets/css/style.css"
interface Template {
    // title?: any;
    children: React.ReactNode
}
const Template = ({ children }: Template) => {
    return (<>
        <html lang="en">
            <head>
            </head>

            <header id="header" className="fixed-top d-flex align-items-center">
                <div className="container d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <h1><Link href="/"><img className="img-responsive" src={`https://mncsekuritas.id/po-content/mnc/img/logo_new1.png?1`} /></Link></h1>

                    </div>
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><Link href="/page" className={'nav-link scrollto active'} passHref>Home</Link></li>
                            <li><a className="nav-link scrollto" href="#about">About</a></li>
                            <li><a className="nav-link scrollto" href="#services">Services</a></li>
                            <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
                            <li><a className="nav-link scrollto" href="#team">Team</a></li>
                            <li><a className="nav-link scrollto" href="#pricing">Pricing</a></li>
                            <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down" /></a>
                                <ul>
                                    <li><a href="#">Drop Down 1</a></li>
                                    <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right" /></a>
                                        <ul>
                                            <li><a href="#">Deep Drop Down 1</a></li>
                                            <li><a href="#">Deep Drop Down 2</a></li>
                                            <li><a href="#">Deep Drop Down 3</a></li>
                                            <li><a href="#">Deep Drop Down 4</a></li>
                                            <li><a href="#">Deep Drop Down 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Drop Down 2</a></li>
                                    <li><a href="#">Drop Down 3</a></li>
                                    <li><a href="#">Drop Down 4</a></li>
                                </ul>
                            </li>
                            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                            <li><a className="getstarted scrollto" href="#about">Get Started</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>{/* .navbar */}
                </div>
            </header>
            {children}
        </html>
    </>)

}

interface Information {
    info: string
}

const Navbar = (props: any) => {
    return (<>
        <header id="header" className="fixed-top d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">
                <div className="logo">
                    <h1><Link href="/">Vesperr</Link></h1>
                </div>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li><Link className="nav-link scrollto active" href="/info">Home</Link></li>
                        <li><a className="nav-link scrollto" href="#about">About</a></li>
                        <li><a className="nav-link scrollto" href="#services">Services</a></li>
                        <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
                        <li><a className="nav-link scrollto" href="#team">Team</a></li>
                        <li><a className="nav-link scrollto" href="#pricing">Pricing</a></li>
                        <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down" /></a>
                            <ul>
                                <li><a href="#">Drop Down 1</a></li>
                                <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right" /></a>
                                    <ul>
                                        <li><a href="#">Deep Drop Down 1</a></li>
                                        <li><a href="#">Deep Drop Down 2</a></li>
                                        <li><a href="#">Deep Drop Down 3</a></li>
                                        <li><a href="#">Deep Drop Down 4</a></li>
                                        <li><a href="#">Deep Drop Down 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Drop Down 2</a></li>
                                <li><a href="#">Drop Down 3</a></li>
                                <li><a href="#">Drop Down 4</a></li>
                            </ul>
                        </li>
                        <li><Link className="nav-link scrollto" href="/contact">Contact</Link></li>
                        <li><a className="getstarted scrollto" href="#about">IN / END</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle" />
                </nav>
            </div>
        </header>

    </>)
}

const Footer = (props: any) => {
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6 text-lg-left text-center">
                            <div className="copyright">
                                © Copyright <strong>Vesperr</strong>. All Rights Reserved
                            </div>
                            <div className="credits">
                                {/* All the links in the footer should remain intact. */}
                                {/* You can delete the links only if you purchased the pro version. */}
                                {/* Licensing information: https://bootstrapmade.com/license/ */}
                                {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/vesperr-free-bootstrap-template/ */}
                                Designed by <a href="https://bootstrapmade.com/">MNC SECURITIES</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <nav className="footer-links text-lg-right text-center pt-2 pt-lg-0">
                                <a href="#intro" className="scrollto">Home</a>
                                <a href="#about" className="scrollto">About</a>
                                <a href="#">Privacy Policy</a>
                                <a href="#">Terms of Use</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
export { Template, Navbar, Footer }