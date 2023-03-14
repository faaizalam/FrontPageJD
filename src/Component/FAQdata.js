export const FAQ = [
    {
        id: 1,

        title: "How do I install theGist for Slack",
        longtext:false,
        text: `Once you tap the 'Add to Slack' button, you will be prompted to connect your workspace <br></br> with theGist. Make sure to choose the right workspace. In some cases you will need an app manager's approval to install apps on your workspace.`
    },
    {

        id: 2,
        title: "How to use theGist for Slack when want to",
        longtext:true,
        text:[
            
{textnum:1,textin:"Add theGist to channels you're interested in summarizing. You can add theGist to channels using our onboarding message with theGist or simple just type /invite @theGist in any channel."}
,{textnum:2,textin:`Summarize channels: Use /gist from any channel to get a fresh summary of what happened in that channel in the last day  <br></br> If you want summary of a longer duration:  use '/gist 3 days' or '/gist 1 week' etc`},
{textnum:3,textin:"Summarize threads:   Use the message shortcut to summarize a message or a thread"},
{textnum:4,textin:"Scheduled summaries:  You can get a daily digest of your selected channels by typing `/gist settings"},
{textnum:5,textin:"You can always mention @thegist in channel or threads (mentions are public)  All summaries are ephemeral,  for your eyes only"}
    
    
    ]
    },
    {
    id:3,
    title:"Who can see my summaries",
    longtext:false,
    text:"All summaries are ephemeral, only you can see them When you mention `@theGist` the mention itself is public (the summary will be private)"

}
]