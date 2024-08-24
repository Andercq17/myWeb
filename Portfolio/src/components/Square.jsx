import '../styles/Square.css'
import Navbar from './Navbar';
function Square({ children }){
    return(
        <>
            <div className='sq-div'>
                <Navbar>
                </Navbar>
                <main className='sq-content'>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Square;