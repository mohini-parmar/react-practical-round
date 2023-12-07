import { Fragment } from "react";


const Testomonials = () => {
    return (
        <Fragment>
            <h2 className="text-center">Our Testomonials</h2>

            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <i class="fa fa-arrow-right" aria-hidden="true"></i></div>
                    <div className="col-md-8">
                        <div className="row">

                            <div className="col-md-1"></div>
                            <div className="col-md-10 text-center">
                                <img src="../img/dummy_img.png" />
                                <h3>Jhon Doe</h3>
                                <i>cloth shop owner</i>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div className="col-md-1"></div>
                        </div>

                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </Fragment>
    )
}

export default Testomonials;