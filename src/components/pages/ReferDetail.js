import React from 'react';
import Contents from '../layouts/Contents';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import {Link} from 'react-router-dom';
import ContInfo from '../layouts/ContInfo';

// function ReferDetail(props){
//     console.log(props)
//     return (
//         <span>{props}</span>
//     )
// }

class ReferDetail extends React.Component {
    componentDidMount(){
        const {location,history} = this.props;
        if( location.state === undefined ){
            history.push('./reference');
        }
        window.scrollTo(0, 0);
    }

    render(){
        const { location } = this.props;
        const { definition, use, element, tag, version, view, title, desc2} = this.props.location.state.refer;
        if( location.state ){
            console.log(location.state)
            return (
                <div>
                    <Header />
                        <Contents>
                        <section id="referCont">
                            <div className="container">
                                <div className="refer__detail pt200">
                                    <h3>{title}</h3>
                                    <p>{desc2}</p>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>특징</th>
                                                <th>설명</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>요소</th>
                                                <td>{element}</td>
                                            </tr>
                                            <tr>
                                                <th>닫는 태그</th>
                                                <td>{tag}</td>
                                            </tr>
                                            <tr>
                                                <th>버전</th>
                                                <td>{version}</td>
                                            </tr>
                                            <tr>
                                                <th>시각적 표현</th>
                                                <td>{view}</td>
                                            </tr>
                                            <tr>
                                                <th>사용성</th>
                                                <td>{use}</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <h4>정의(Definition)</h4>
                                    
                                    <ul>
                                        {
                                            definition.map((def)=>(
                                                <li key={def.toString()}>{def}</li>
                                            ))
                                        }
                                    </ul>
                                    <Link className="list-btn" to="./reference">목록보기</Link>
                                </div>
                                
                            </div>
                        </section>
                        <ContInfo />
                        </Contents>               
                    <Footer />   
                </div>

            )
        } else {
            return null;
        }
    }
}

export default ReferDetail;