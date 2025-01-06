import me from "../assets/meeee.jpg"
import collage from "../assets/collage-studio.png";

export default function Projects() {
    return (
        <section id="projects" className="ssm:mt-sectionMt">
            <div id="h3Container" className="opacity-95 bg-bg mb-h3ContainerMb lg:hidden sticky top-0 h-h3ContainerHeight flex items-center text-secondaryTextColor">
                <h3 className="font-extrabold text-responsiveFontSize">PROJECTS</h3>
            </div>

            <div className=" mb-10">
                <a href="https://collage-studio-clone.vercel.app/">
                    <img src={collage} style={{ objectFit: "contain" }} alt="Image of the collage studio website" className=" float-left w-56 h-32 pr-4 pb-4" />
                </a>
                <p className="text-justify text-responsiveFontSize">A clone of the collage studio website. This clone was built using <strong>React js</strong> on the frontend. Technologies such as <strong>Redux</strong> (for state managment), <strong>Framer Motion</strong> (for clean animations), and <strong>Tailwind css</strong> were used to bring the frontend to live.The backend logic/api is being handled by the <strong>Laravel</strong> framework.</p>
            </div>
        </section>
    )
}