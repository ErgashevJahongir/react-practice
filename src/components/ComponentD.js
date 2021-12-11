import React, { PureComponent } from "react";
import { UserConsumer, UserProvider } from "./userContext";

export class ComponentD extends PureComponent {
    render() {
        return (
            <div>
                <UserConsumer>
                    {(userName) => {
                        return <h1>Assalomu alaykum, {userName}</h1>;
                    }}
                </UserConsumer>
            </div>
        );
    }
}

export default ComponentD;
