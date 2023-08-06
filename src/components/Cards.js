import React, { Component } from 'react'
export default class Cards extends Component {
  render() {
    return (
        <>
        <div className='container'>
        <div className='row'>
            <div className='col-sm-4 my-4'>
                <div className="card" >
                    <div className="card-body" style={{backgroundColor: '#98EECC'}}>
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">MCA (Master of Computer Application) is a 3-years course that can be pursued after BCA or equivalent bachelor's degree. Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div className='col-sm-4 my-4'>
                <div className="card" >
                    <div className="card-body" style={{backgroundColor: '#D4ADFC'}}>
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div className='col-sm-4 my-4'>
                <div className="card" >
                    <div className="card-body" style={{backgroundColor: '#DDE6ED'}}>
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div className='col-sm-4 my-4'>
                <div className="card" >
                    <div className="card-body" style={{backgroundColor: '#FBFFDC'}}>
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div className='col-sm-4 my-4'>
                <div className="card" >
                    <div className="card-body" style={{backgroundColor: '#D0F5BE'}}>
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div className='col-sm-4 my-4'>
                <div className="card" >
                    <div className="card-body" style={{backgroundColor: '#AEE2FF'}}>
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
      </div>
      <div className="card col-4 " style={{}}>
        <img src='C:\Users\firoj\OneDrive\Desktop\React\my-app\src\components\images\firoj.jpg' className="card-img-top" alt="firoj"/>

        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
     </div>
     </div>
      </>
    )
  }
}
