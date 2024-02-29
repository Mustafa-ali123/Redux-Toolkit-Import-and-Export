import React from 'react'

const Card = () => {
    return (
        <>
            <div class='container main mx-auto'>
                <div class='row'>
                    <div class=' mx-auto mt-5 mx-2 card col-md-3 col-lg-3 col-sm-12 p-3 mb-5 rounded px-3 py-3'>
                        <button class="cancel">x</button>
                        <div class="image-container">
                            <img class='mx-auto rounded' src="item.image" />
                        </div>
                        <h4 class='text-center mt-4 py-2'>{item.text}</h4>
                        <p class='mt-2 text-center'>{item.body}</p>
                        <div class="d-flex justify-content-center">
                            <button class='butt mx-3'><span class='span'></span> - </button>
                            {item.count}
                            <button class='butt mx-3'><span class='span'></span> + </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
