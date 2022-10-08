import React from "react";

function Projects() {
    return (
        <div className="flex text-white justify-center w-full ml-[12.5rem] md:ml-36 lg:ml-0 mt-8 lg:text-xl items-center text-center font-medium z-[100] font-poppins max-w-max lg:max-w-none">
            <div>
                Projects
                <br />
                <br />
                <div className="ml-4">
                    <div className="max-w-screen-3xl md:ml-20 inline-flex flex-wrap gap-4">
                        <Project
                            lang="Java"
                            name="ExtraBoomerangs"
                            type="Minecraft Plugin"
                            desc="A simple Minecraft Plugin that adds Boomerangs to the game."
                            url="https://github.com/cosrnic/ExtraBoomerangs"
                            button="View Github"
                        />
                        <Project
                            lang="Java"
                            name="Super Pickaxe"
                            type="Minecraft Plugin"
                            desc="A simple Minecraft Plugin that adds 3x3 and 5x5 Pickaxes to the game."
                            url="https://github.com/cosrnic/SuperPickaxe"
                            button="View Github"
                        />
                        <Project
                            lang="Java"
                            name="Protect The Dirt"
                            type="Minecraft Plugin"
                            desc="A simple Minecraft Plugin that logs when a player breaks dirt to console and a file."
                            url="https://github.com/cosrnic/ProtectTheDirt"
                            button="View Github"
                        />
                        <Project
                            lang="Java"
                            name="Flipped"
                            type="Minecraft Mod"
                            desc="A Fabric 1.19 Minecraft Mod that flips you upside down."
                            url="https://github.com/cosrnic/Flipped"
                            button="View Github"
                        />
                        <Project
                            lang="Python"
                            name="Rock! Paper! Scissors!"
                            type="Discord Bot"
                            desc="A simple Discord Bot that plays Rock Paper Scissors with you!"
                            url="https://cosrnic.github.io/RPSWebsite/"
                            button="View Website"
                        />
                        <Project
                            lang="HTML"
                            name="acatia's Music player"
                            type="Website"
                            desc="A website to download a music player by acatia"
                            url="https://acatiadroid.github.io/music-player"
                            button="View Website"
                        />
                        {/* <Project lang='HTML' name="Xbox Gamepass Timer" type='Website' desc='A website that shows the Daily Gamepass quest resets time.' url='https://acatiadroid.github.io/music-player'/> */}
                        <Project
                            lang="JS"
                            name="React To-Do list"
                            type="Website"
                            desc="A website that lists your input which you can edit or delete or mark as done."
                            url="https://cosrnic.github.io/GithubPagewithJStest/"
                            button="View Website"
                        />
                        <Project
                            lang="JS"
                            name="cosrnic.uk"
                            type="Website"
                            desc="A portfolio website that you are currently looking at, credits in the credits page :)"
                            url="https://cosrnic.uk/"
                            button="View Website"
                        />
                        <Project
                            lang="JS"
                            name="card.cosrnic.uk"
                            type="Website"
                            desc="A website that interacts with Discord's API to display my profile."
                            url="https://card.cosrnic.uk/"
                            button="View Website"
                        />
                        <Project
                            lang="JS"
                            name="WynnAPI"
                            type="API Wrapper"
                            desc="An API Wrapper for JS that makes it easier to use the Wynncraft API."
                            url="https://www.npmjs.com/package/wynnapi/"
                            button="View NPM Page"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

const Project = ({ lang, name, type, desc, url, button }) => (
    <div className="w-[200px]  text-base flex-wrap h-auto rounded bg-gray-850 border-2 border-blue-500 hover:scale-105 transition-all">
        <div className="text-sm align-top float-left p-2">{lang}</div>
        <br />
        <div className="p-5">
            <span className="text-blue-500 text-lg">{name}</span> <br /> {type}
            <hr />
            <span className="text-sm">{desc}</span>
            <br />
        </div>
        <div className="p-4 mb-2">
            <a href={url} rel="norefferer noreferrer" target="_blank">
                <button className="text-base border-2 rounded-lg p-2 align-bottom hover:text-blue-500 hover:border-blue-500 w-[100%] transition-all">
                    {button}
                </button>
            </a>
        </div>
    </div>
);

export default Projects;
