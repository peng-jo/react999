import axios from 'axios';
import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Contents from '../layouts/Contents';

import Loading from '../layouts/Loading';
import WrapTitle from '../layouts/WrapTitle';
import ReferInfo from '../info/ReferInfo';
import ContInfo from '../layouts/ContInfo';


// function Reference(){
//     return (
//         <div>
//             <Header />
//             <Contents>Reference</Contents>
//             <Footer />
//         </div>
//     )
// }

class Reference extends React.Component {
    state = {
        isLoading: true,
        refers: []
    }

    getRefer = async () => {
        const {
            data: {
                data : {
                    htmlRefer
                }
            }
        } = await axios.get("https://peng-jo.github.io/react999/src/assets/json/refer.json");

        this.setState({refers:htmlRefer,isLoading:false})
    }

    componentDidMount(){
        setTimeout(()=>{
            this.getRefer();
        },2000)
    }
    render(){
        const {isLoading, refers} = this.state;
        
        return (
            <div>
                {
                    isLoading ? (
                        <Loading />
                    ) : (
                        <div>
                            <Header />
                            <Contents>
                            <section id="referCont">
                                <div className="container">
                                    <WrapTitle text={['Reference','book']}/>  
                                    <div className="refer__cont">
                                       <div className="table">
                                           <h3>HTML</h3>
                                            <ul>
                                                {refers.map((refer)=>(
                                                    <ReferInfo 
                                                        refer = {refer}
                                                    />   
                                                ))}
                                            </ul>
                                       </div>
                                    </div>
                                </div>
                            </section>

                                <ContInfo/>
                            </Contents>
                            <Footer />
                        </div>

                    )
                }
            </div>
        )
    }
}


export default Reference;