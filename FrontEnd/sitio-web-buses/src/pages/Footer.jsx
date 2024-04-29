import './Footer.css'

function Footer(){
    return(
        <footer className='piePag'>
            <p className='textoFooter'>&copy; {new Date().getFullYear()}-EIA todos los derechos reservados</p>
        </footer>
    );
}
export default Footer