import Navbar from "../../components/navbar/Navbar";
import { Fragment } from "react";
import Sidebar from "../../components/sidebar/Sidebar";

function Home() {
    return (
        <Fragment>
            <Navbar />
            <main>
                <Sidebar />
            </main>
        </Fragment>
    )
}

export default Home;