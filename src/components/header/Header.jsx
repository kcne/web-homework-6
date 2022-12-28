import logo from '../../assets/esogu-logo.png';
function Header() {
    return (  
    <div className="nav d-flex justify-content-between">
        <div className="header-logo">
            <div className="d-flex gap-2">
                <img src={logo} width="80" height="80" className="d-inline-block align-top" alt=""/>
                <div>
                    <h4 className="mt-2"><b>Eskişehir Osmangazi Üniversitesi</b></h4>
                    <h5>Öğrenci Yönetim Sistemi</h5>
                </div>
            </div>
        </div>
        <div className="input-info d-flex flex-column justify-content-center align-items-end">
            <h5>Merhaba, John Doe</h5>
            <button id="cikis" className="btn btn-dark w-75">Çikiş yap</button>
        </div>
    </div>
    );
}

export default Header;