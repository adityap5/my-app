import React from 'react'

export default function About(props) {



    return (
        <>
            <div className="container my-3">
                <h1 className="my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>About Us</h1>
                <div className="accordion" id="accordionExample" >
                    <div className="accordion-item " style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                        <h2 className="accordion-header">
                            <button className="accordion-button" style={{ backgroundColor: props.mode === 'dark' ? '#424141' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>Analyze your Text</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                                textChanger simply change the text according to your need.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === 'dark' ? '#424141' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>  Free to use </strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                                <strong>textChanger</strong>  is a free to use website , where you can manipulate your text as you want.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === 'dark' ? '#424141' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>Browser Compatible</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                                <strong> textChanger </strong> website is designed and developed to work seamlessly across different web browsers, ensuring consistent functionality and appearance for users regardless of their chosen browser.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === 'dark' ? '#424141' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                <strong>Buy me a Cup of Coffee</strong>
                            </button>
                        </h2>
                        <div id="collapsefour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                                simply by supporting me and follow me on linkedin,instagram and Github.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

