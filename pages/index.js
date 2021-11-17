import Link from "next/link"
import A from "../components/A";
import Head from "next/head";
import MainContainer from "../components/MainContainer";

const Index = () => {
    return (
            <MainContainer keywords="main page">
                <div>
                    <h1>Main Page</h1>
                    <style jsx>
                        {`
                          .navbar {
                            background: orange;
                            padding: 15px;
                          }

                          .link {
                            text-decoration: none;
                            color: white;
                            font-size: 20px;
                            margin: 10px;
                          }
                        `}
                    </style>
                </div>
            </MainContainer>
    );
};

export default Index;