import React from "react";
import contect from "../Asset/Images/contect.png";
import contect2 from "../Asset/Images/contect2.png";

export default function Discount() {
    return (
        <footer class="bd-footer py-5 mt-5 discount " >
            <div class="container py-5">
                <div class="d-flex justify-content-between">

                    <div>
                        <h2 className="text-light pe-40" style={{
                            clear: 'both',
                            display: 'inline-block',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap'
                        }}>
                            Stay updated through our newsletter!
                        </h2>
                    </div>

                    <div>
                        <div
                            class="example"
                            style={{
                                margin: "auto",
                                maxWidth: "400px",
                                display: "inline-flex",
                                marginLeft: "300px",
                            }}
                        >
                            <input
                                type="email"
                                placeholder="Enter your Email address"
                                name="search2"
                                style={{ minWidth: '74%' }}
                            />
                            <button
                                type="submit"
                                style={{ width: "100px", backgroundColor: "#B5B8B8" }}
                                onClick={() => alert("Thanks for Subscribe")}
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
