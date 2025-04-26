import { Fragment } from "react";

export default function TodoList() {
    return (
        <Fragment>
            <ul style={
                {
                backgroundColor:'black',
                color: 'pink'
            }
            }>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>


            </ul>

        </Fragment>
    )
}