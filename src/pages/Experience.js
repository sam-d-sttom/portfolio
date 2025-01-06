

export default function Experience() {
    return (
        <section id="experience" className="ssm:mt-sectionMt">
            <div id="h3Container" className="opacity-95 bg-bg mb-h3ContainerMb sticky top-0 h-h3ContainerHeight flex items-center text-secondaryTextColor lg:hidden ">
                <h3 className="font-extrabold text-secondaryTextColor">EXPERIENCE</h3>
            </div>
            <div className="mb-eachExperienceMargin flex justify-between lg:flex-row ssm:flex-col ">
                <div> 2023 - Present </div>
                <div className="lg:w-4/6 ssm:w-6/6">
                    <h4 className="font-extrabold">Junior Developer At SOPDAP Technologies (IT Solutions)</h4>
                    <p>Delivered comprehensive IT solutions through the development of robust full-stack applications, leveraging HTML5, CSS3, JavaScript, React, Laravel, jQuery, and WordPress (PHP). Collaborated closely with Business Analysts and Solutions Architects to implement software solutions that consistently met all project requirements and business objectives.</p>
                    <ul className="mt-marginTopForTheTagsDiv flex justify-between">
                        <li className="text-tagsFontSize flex justify-around items-center rounded-2xl py-1 px-2 bg-bgTags">Javascript</li>
                        <li className="text-tagsFontSize flex justify-around items-center rounded-2xl py-1 px-2 bg-bgTags">React</li>
                        <li className="text-tagsFontSize flex justify-around items-center rounded-2xl py-1 px-2 bg-bgTags">PHP</li>
                        <li className="text-tagsFontSize flex justify-around items-center rounded-2xl py-1 px-2 bg-bgTags">Laravel</li>
                    </ul>
                </div>
            </div>

        </section>
    )
}