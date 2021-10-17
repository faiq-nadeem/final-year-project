import React from 'react'

const Footer = () => {
    return (
        <footer className="footer pt-0" style={{position: 'fixed', bottom: '0', width: '100%', padding:'0px'}}>
            <div className="col-lg-9 align-items-center">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="copyright text-center  text-lg-left  text-muted">
                            &copy 2021 <a href="nill" className="font-weight-bold ml-1" target="_blank">ISOSLES</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                            <li className="nav-item">
                                <a href="dashboard.php" className="nav-link" target="_blank">Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a href="orders.php" className="nav-link" target="_blank">Orders</a>
                            </li>
                            <li className="nav-item">
                                <a href="products.php" className="nav-link" target="_blank">Products</a>
                            </li>
                            <li className="nav-item">
                                <a href="account.php" className="nav-link" target="_blank">Account</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
