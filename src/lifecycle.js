import React, { Component } from "react";
// import ReactDOM from "react-dom";

class lifecycle extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = { date: new Date() };
    //     this.zarbaGool = "Goool Goool";
    // }

    // componentDidMount() {
    //     this.timerID = setInterval(() => {
    //         console.log("componentDidMount ishadi");
    //         this.tick();
    //     }, 1000);
    // }

    // componentWillUnmount() {
    //     console.log("componentWillUnmount ishldi");
    //     clearInterval(this.timerID);
    // }

    // tick() {
    //     this.setState({
    //         date: new Date(),
    //     });
    // }

    // signal() {
    //     alert("salom");
    // }

    // zarba = () => {
    //     alert(this.zarbaGool);
    // };

    // nimaGap = (qalay) => {
    //     alert(qalay);
    // };

    // xabar = (sound, evt) => {
    //     alert(sound + " xodisa turi " + evt.type);
    // };

    // constructor(props) {
    //     super(props);

    //     this.state = { username: "" };
    // }

    // changeHandler = (event) => {
    //     this.setState({ username: event.target.value });
    // };

    // render() {
    //     let header = "";
    //     if (this.state.username) {
    //         header = <h1>Salom {this.state.username}</h1>;
    //     } else {
    //         header = "";
    //     }
    //     return (
    //         <div>
    //             {/* {<h1>Soat {this.state.date.toLocaleTimeString()} bo'ldi</h1>}
    //             <button onClick={this.signal}>Salom Ayting</button>
    //             <button onClick={this.zarba}>Goool bo'ldi</button>
    //             <button onClick={() => this.nimaGap("Axvollaring yaxshimi :)")}>
    //                 Nima gap
    //             </button>
    //             <button onClick={(event) => this.xabar("Xabar berildi", event)}>
    //                 CHi gap
    //             </button> */}

    //             <form>
    //                 {header}
    //                 <h1>Salom {this.state.username}</h1>
    //                 <p>Ismingizni kiriting: </p>
    //                 <input type="text" onChange={this.changeHandler} />
    //             </form>
    //         </div>
    //     );
    // }

    // constructor(props) {
    //     super(props);
    //     this.state = { username: "" };
    // }

    // changeHandler = (event) => {
    //     this.setState({ username: event.target.value });
    // };

    // submitHandler = (event) => {
    //     event.preventDefault();
    //     alert(this.state.username + " ni jo'natmoqdasiz");
    // };

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         username: "",
    //         age: null,
    //     };
    // }

    // changeHandler = (event) => {
    //     let elementName = event.target.name;
    //     let elementValue = event.target.value;
    //     this.setState({ [elementName]: elementValue });
    // };

    // render() {
    //     return (
    //         // <form onSubmit={this.submitHandler}>
    //         //     <h1>Salom {this.state.username}</h1>
    //         //     <p>Ismingizni kiritib, uni jo'nating :</p>
    //         //     <input type="text" onChange={this.changeHandler} />
    //         //     <input type="submit" value="Jo'natmoq" />
    //         // </form>
    //         <form>
    //             <h1>
    //                 Salom {this.state.username} {this.state.age}
    //             </h1>
    //             <p>Ismingizni kiriting: </p>
    //             <input
    //                 type="text"
    //                 name="username"
    //                 onChange={this.changeHandler}
    //             />
    //             <p>Yoshingizni kiriting: </p>
    //             <input type="text" name="age" onChange={this.changeHandler} />
    //         </form>
    //     );
    // }

    // // Formani bacendga validatsiya qilish uchun

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         username: "",
    //         age: null,
    //     };
    // }

    // submitHandler = (event) => {
    //     event.preventDefault();
    //     let age = this.state.age;
    //     if (!Number(age)) {
    //         alert("Yoshingizni sonda kiritishingiz kerak");
    //     }
    // };

    // changeHandler = (event) => {
    //     let elementName = event.target.name;
    //     let elementValue = event.target.value;
    //     this.setState({ [elementName]: elementValue });
    // };

    // render() {
    //     return (
    //         <form onSubmit={this.submitHandler}>
    //             <h1>
    //                 Salom {this.state.username} {this.state.age}
    //             </h1>
    //             <p>Ismingizni kiriting: </p>
    //             <input
    //                 type="text"
    //                 name="username"
    //                 onChange={this.changeHandler}
    //             />
    //             <p>Yoshingizni kiriting: </p>
    //             <input type="text" name="age" onChange={this.changeHandler} />
    //             <br />
    //             <input type="submit" value="Jo'natmoq" />
    //         </form>
    //     );
    // }

    //  // formni to'g'ri validatsoya qilish

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            age: null,
            errorMessage: "",
        };
    }

    submitHandler = (event) => {
        event.preventDefault();
        let age = this.state.age;
        if (!Number(age)) {
            alert("Yoshingizni sonda kiritishingiz kerak");
        }
    };

    changeHandler = (event) => {
        let elementName = event.target.name;
        let elementValue = event.target.value;
        let err = "";
        if (elementName === "age") {
            if (elementValue !== "" && !Number(elementValue)) {
                err = (
                    <span style={{ color: "red" }}>
                        Yoshingizni kiritishda son ishlatishingiz kerak
                    </span>
                );
            }
        }
        this.setState({ errorMessage: err });
        this.setState({ [elementName]: elementValue });
    };

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <h1>
                    Salom {this.state.username} {this.state.age}
                </h1>
                <p>Ismingizni kiriting: </p>
                <input
                    type="text"
                    name="username"
                    onChange={this.changeHandler}
                />
                <p>Yoshingizni kiriting: </p>
                <input type="text" name="age" onChange={this.changeHandler} />
                {this.state.errorMessage}
                <br />
                <input type="submit" value="Jo'natmoq" />
            </form>
        );
    }
}

export default lifecycle;
