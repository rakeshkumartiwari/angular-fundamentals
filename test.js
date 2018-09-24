
const events = [
    {
        sessions: [
            {
                name: "math",
                id: "1"
            },
            {
                name: "english"
            }
        ]
    },
    {
        sessions: [
            {
                name: "math with fun",
                id: "3"
            },
            {
                name: "english"
            }
        ]
    }
];
function search(term) {
    let sessions = [];

    events.filter((event) => {
        var filteredSession = event.sessions.filter(session => session.name.indexOf(term) > -1);
       
        sessions = sessions.concat(filteredSession);
        
    });

   return sessions;

    // ket me check this first good job
}
    console.log("search math:", search("math"));