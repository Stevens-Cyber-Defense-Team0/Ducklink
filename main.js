// Remember that you only get ONE javascript file
// WHEN YOU COPY JAVASCRIPT TO DUCKLINK: INCLUDE THE SCRIPT TAGS

// Remove extra weebly-looking features from the Ducklink site
// Gonna need to make this async because Ducklink loads in extra items using a timed JS script
function removeExtra()
{
    window.setTimeout(() => {
        try
        {
            Array.from(document.getElementsByClassName("containerMeasure"))[0].remove();
            document.getElementById("ct-inspector--wsb-background").remove();
        }
        catch(err)
        {
            console.error(err);
        }
    }, 1000);
}

function consoleGreet()
{
    console.clear();
    console.log("A SCDT website wouldn't be a SCDT website if we didn't have stuff for people like you to poke around with and break 🤷‍♂️. Have fun 🙃.");
    console.log("As our old ~~dictator~~ sorry, I meant president - likes to say: The internet is being held together by duct tape and prayers.");
    console.log("Oh... and you're gonna want to look for 2 files.");
}

function initialize()
{
    removeExtra();
    consoleGreet();
}

window.onload = initialize;

// Sidebar function
function rotate(sidebarBtn)
{
    const sidebar = document.getElementById("sidebar");

    if (sidebarBtn.style.transform == "rotate(180deg)")
    {
        // Sidebar in
        sidebarBtn.style.transform = "";
        sidebarBtn.classList.remove("sidebarBtnExpanded");
        sidebar.style.left = "-300px";
    }
    else
    {
        // Sidebar out
        sidebarBtn.style.transform = "rotate(180deg)";
        sidebarBtn.classList.add("sidebarBtnExpanded");
        sidebar.style.left = "0px";
    }
}