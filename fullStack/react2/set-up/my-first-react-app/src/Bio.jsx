import { Fragment } from "react"

export default function Bio() {
    return (
        <Fragment>
        <div className="intro">
            <h1>Welcome yo my website!</h1>
        </div>
        <p className="summary">
            You can find my thoughts here.

            <br />
            <b>And<i> pictures</i></b> of scientist!

        </p>

        </Fragment>
    );
}