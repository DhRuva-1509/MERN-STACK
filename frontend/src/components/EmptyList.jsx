import React from "react";
import Image from "react-bootstrap/Image"
import EmptyProducts from "/svg/EmptyProduct.svg"

const EmptyList = ({message}) => {
    return(
        <div style={{justifyItems:'center'}}>
            <div>
                <Image
                    className="center"
                    src = {EmptyProducts}
                    width={234}
                    height={340}
                    alt="404"
                />
            </div>

            <div className="text-center">{message}</div>
        </div>
    )
}

export default EmptyList