// App.js

import React, { component } from 'react';
import './App.css';

class App extends Component {
    state = {
        person: {
            fullName: "Jojn Doe";
            bio: "Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.",
            imgSrc: "https://
            via.placehoder.com/150",
            profession: "Software Engineer" 
        }
        shows: false,
        mountTime: new Date()
    };

    componentDidMount() {
        this.interval= setInterval(() => {
            this.setstate({ mountTime: new 
                Date()
            })
        },1000
        );
    }
    componentWillUnmount ( {
        clearInterval(this.interval);
    }
    toggleShow = () => {
        this.setState(prevState => ({
            shows: !prevState.shows
        }));
        
    }
    )
};
render (){
    const {person, shows, mountTime } =
    this.state;

    return (
        <div className="App">
            <button onClick={this.toggleShow}>
                Toggle Profile</button>
                {shows && (
                    <div>
                        <h1>{person.fullName}</h1>
                        <img src={person.imgSrc}
                        alt={person.fullName} />
                        <p>{person.bio}</p>
                        <p>profession:
                            {person.profession}
                        </p>
                    </div>
                )}
                <p>Time since mount:
                    {Math.floor((new Date()-mountTime) /
                    1000)} secounds
                </p>
            </button>

            
        </div>
    )
}

export default App;