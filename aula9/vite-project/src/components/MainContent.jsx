import Contact from "./Contact";
import Info from "./Info";
import Skills from "./Skills";

function MainContent() {
    return ( 
        <>
            <div className="mainInfo">
                <section id="info">
                    <Info/>
                    <Skills/>
                </section>
                    <Contact/>
            </div>
        </>
     );
}

export default MainContent;